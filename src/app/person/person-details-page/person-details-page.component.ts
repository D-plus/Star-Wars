import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '../../shared/constants/routes';
import { PeopleService } from '../../shared/services/people/people.service';
import { LoadingService } from '../../shared/services/loading/loading.service';
import { finalize } from 'rxjs/operators';
import { DETAILS_PAGE_FIELDS_CONFIG, DIALOG_DETAILS_FIELDS_CONFIG, PEOPLE_LIST_COLUMNS_DETAILS_PAGE } from '../../shared/constants/common';
import { MatDialog } from '@angular/material';
import { PlanetDetailsDialogComponent } from '../../planets/planet-details-dialog/planet-details-dialog.component';
import { FieldsConfig } from '../../shared/interfaces/fields-config.interface';
import { Person } from '../../shared/interfaces/person.interface';
import { Planet } from '../../shared/interfaces/planet.interface';

@Component({
  selector: 'app-person-details-page',
  templateUrl: './person-details-page.component.html',
  styleUrls: ['./person-details-page.component.scss']
})
export class PersonDetailsPageComponent implements OnInit {
  private person: Person;
  private planet: Planet;
  private peopleAtSamePlanet: Person[];
  private detailsPageFieldsConfig: FieldsConfig[] = DETAILS_PAGE_FIELDS_CONFIG;
  private dialogDetailsConfig: FieldsConfig[] = DIALOG_DETAILS_FIELDS_CONFIG;
  private peopleListColumns = PEOPLE_LIST_COLUMNS_DETAILS_PAGE;

  constructor(private peopleService: PeopleService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const personId = params.get('id');
      if (!personId) {
        return this.router.navigate([ROUTES.PEOPLE]);
      }
      this.loadingService.start();
      this.peopleService
        .getPersonWithPeopleAtSamePlanet(personId)
        .pipe(finalize(() => this.loadingService.stop()))
        .subscribe(({ person, peopleAtSamePlanet, planet }) => {
          this.person = person;
          this.peopleAtSamePlanet = peopleAtSamePlanet;
          this.planet = planet;
        });
    });
  }

  openDialog(): void {
    this.dialog.open(PlanetDetailsDialogComponent, {
      data: {
        planet: this.planet,
        dialogDetailsConfig: this.dialogDetailsConfig,
      },
    });
  }

}
