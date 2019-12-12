import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortData } from '../../interfaces/sort-data.interface';
import { PEOPLE_LIST_COLUMNS, SORT_DIRECTIONS } from '../../constants/common';
import { AbstractObject } from '../../interfaces/abstract-object.interface';
import { ListTitleItem } from './list-title/list-title-item';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppListComponent implements OnInit {
  private sortDirection = SORT_DIRECTIONS.ASC;
  private sortByField = PEOPLE_LIST_COLUMNS[0].value;
  private sortValuesType = 'string';
  private currentSearchValue: string;
  @Input() searchable = true;
  @Input() paginated = true;
  @Input() columnsList: ListTitleItem[] = [];
  @Input() defaultSearchValue: string;
  @Input() items: AbstractObject[] = [];
  @Input() totalItemsCount = 0;
  @Input() pageIndex = 0;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.currentSearchValue = this.defaultSearchValue || '';
  }

  handleSearchInput(query: string): void {
    this.currentSearchValue = query;
    this.search.emit(query);
  }

  handlePageChange({ pageIndex }): void {
    this.pageChange.emit(pageIndex);
  }

  handleSortClick(data: SortData): void {
    this.sortByField = data.field;
    this.sortDirection = data.direction;
    this.sortValuesType = data.sortValuesType || 'string';
  }

  trackByEntities({}, item): string {
    return item.name;
  }

  trackByColumnFields({}, item): string {
    return item.value;
  }
}
