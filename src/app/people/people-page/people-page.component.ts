import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PeopleService } from '../../shared/services/people/people.service';
import { Person } from '../../shared/interfaces/person.interface';
import { DestroyableComponent } from '../../shared/components/destroyable.component';
import { debounceTime, distinctUntilChanged, finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PEOPLE_LIST_COLUMNS } from '../../shared/constants/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../shared/services/loading/loading.service';
import { ListTitleItem } from '../../shared/components/list/list-title/list-title-item.interface';

const DEBOUNCE_TIME = 700;

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeoplePageComponent extends DestroyableComponent implements OnInit {
  private currentPageIndex = 0;
  private currentSearchQuery = '';
  private peopleListColumns: ListTitleItem[] = PEOPLE_LIST_COLUMNS;
  private people: Person[] = [];
  private searchQuery$: Subject<string> = new Subject();
  private totalSum = 0;

  constructor(private peopleService: PeopleService,
              private loadingService: LoadingService,
              private ref: ChangeDetectorRef,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.fetchInitialPeopleData();
    this.searchQuery$
      .pipe(
        takeUntil(this.onDestroy),
        debounceTime(DEBOUNCE_TIME),
        distinctUntilChanged()
      )
      .subscribe(this.peopleSearchQueryHandler.bind(this));
  }

  fetchInitialPeopleData(): void {
    const routeSnapshotQryParams = this.activatedRoute.snapshot.queryParams;
    const pageIndex = routeSnapshotQryParams.page - 1;
    this.peopleSearchQueryHandler(routeSnapshotQryParams.query || '', pageIndex || 0);
  }

  peopleSearchQueryHandler(nextSearchQuery: string, nextPageIndex = 0): void {
    this.currentPageIndex = nextPageIndex;
    this.currentSearchQuery = nextSearchQuery;
    this.fetchPeople(nextSearchQuery, `${ this.currentPageIndex + 1 }`);
  }

  fetchPeople(nextSearchQuery: string, page: string): void {
    this.loadingService.start();
    this.peopleService.searchPeople(nextSearchQuery, page)
      .pipe(
        takeUntil(this.onDestroy),
        finalize(() => this.loadingService.stop())
      )
      .subscribe(({ count, results }) => {
        this.people = results;
        this.totalSum = count;
        this.ref.markForCheck();
        this.updateRouteQueryParam(nextSearchQuery, page);
      });
  }

  handleSearchEvent(value): void {
    this.searchQuery$.next(value);
  }

  handlePageChange(pageIndex: number): void {
    this.currentPageIndex = pageIndex;
    this.fetchPeople(this.currentSearchQuery, `${ pageIndex + 1 }`);
  }

  updateRouteQueryParam(query: string, page: string) {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { query, page },
        queryParamsHandling: 'merge',
      }
    );
  }

  get peopleList(): Person[] {
    return this.people;
  }
}
