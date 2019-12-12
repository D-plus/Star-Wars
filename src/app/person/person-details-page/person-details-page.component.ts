import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '../../shared/constants/routes';
import { PeopleService } from '../../shared/services/people/people.service';
import { LoadingService } from '../../shared/services/loading/loading.service';
import { finalize } from 'rxjs/operators';
import { DETAILS_PAGE_FIELDS_CONFIG, PEOPLE_LIST_COLUMNS_DETAILS_PAGE } from '../../shared/constants/common';
import { MatDialog } from '@angular/material';
import { PlanetDetailsDialogComponent } from '../../shared/components/planet-details-dialog/planet-details-dialog.component';

@Component({
  selector: 'app-person-details-page',
  templateUrl: './person-details-page.component.html',
  styleUrls: ['./person-details-page.component.scss']
})
export class PersonDetailsPageComponent implements OnInit {
  // Person
  private person = {
    name: 'name',
    birth_year: 'birth_year',
    gender: 'gender',
    created: 'created',
    hair_color: 'hair_color',
    eye_color: 'eye_color',
    skin_color: 'skin_color',
    mass: 'mass',
    height: 'height',
  };
  // Planet
  private planet = { name: 'name' };
  // : Person[]
  private peopleAtSamePlanet = [
    {
      name: 'name',
      birth_year: 'birth_year',
      gender: 'gender',
      created: 'created',
      hair_color: 'hair_color',
      eye_color: 'eye_color',
      skin_color: 'skin_color',
      mass: 'mass',
      height: 'height',
    },
    {
      name: 'name',
      birth_year: 'birth_year',
      gender: 'gender',
      created: 'created',
      hair_color: 'hair_color',
      eye_color: 'eye_color',
      skin_color: 'skin_color',
      mass: 'mass',
      height: 'height',
    },
    {
      name: 'name',
      birth_year: 'birth_year',
      gender: 'gender',
      created: 'created',
      hair_color: 'hair_color',
      eye_color: 'eye_color',
      skin_color: 'skin_color',
      mass: 'mass',
      height: 'height',
    }
  ];
  private detailsPageFieldsConfig = DETAILS_PAGE_FIELDS_CONFIG;
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
      data: this.planet,
    });
  }

}
