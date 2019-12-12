import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, map, mergeMap, } from 'rxjs/operators';
import { forkJoin, Observable, throwError } from 'rxjs';

import { PlanetsService } from '../planets/planets.service';

import { PeopleEntity } from '../../interfaces/people-entity.interface';
import { Person } from '../../interfaces/person.interface';
import { Planet } from '../../interfaces/planet.interface';
import { PersonDetailsPageData } from '../../interfaces/personDetailsPageData';

import { ROUTES } from '../../constants/routes';
import { URLS } from '../../constants/urls';
import extractNumberFromString from '../../helpers/extractNumberFromString';
import extractNumbersFromListOfStrings from '../../helpers/extractNumbersFromListOfStrings';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient,
              private planetsService: PlanetsService) {
  }

  searchPeople(searchQuery: string, page = '1'): Observable<PeopleEntity> {
    return this.http.get(`${URLS.PEOPLE}/`, { params: { page, search: searchQuery } })
      .pipe(
        map((data: PeopleEntity) => {
          const result: PeopleEntity = {
            ...data,
            results: this.addPageURLFieldOnPersons(data.results),
          };
          return result;
        })
      );
  }

  getPerson(id): Observable<Person> {
    return this.http.get(`${URLS.PEOPLE}/${id}/`) as Observable<Person>;
  }

  getPersonWithPeopleAtSamePlanet(id: string): Observable<PersonDetailsPageData> {
    let person: Person;
    let planet: Planet;
    return this.http.get(`${URLS.PEOPLE}/${id}/`)
      .pipe(
        concatMap((resultPerson: Person) => {
          person = resultPerson;
          const planetId = extractNumberFromString(person.homeworld);
          if (planetId) {
            return this.planetsService.getPlanet(planetId);
          }
          return throwError('Something went wrong');
        }),
        mergeMap((planerResult: Planet) => {
          planet = planerResult;
          const planetsResidentsIds = extractNumbersFromListOfStrings(planerResult.residents);

          return forkJoin(planetsResidentsIds.map(this.getPerson.bind(this)));
        }),
        map((peopleAtSamePlanetResult: Person[]) => {
          const peopleAtSamePlanet = this.addPageURLFieldOnPersons(peopleAtSamePlanetResult);
          return { peopleAtSamePlanet, person, planet };
        }),
    );
  }

  private addPageURLFieldOnPersons(list: Person[]): Person[] {
    return list.map(person => ({ ...person, pageURL: `/${ROUTES.PERSON}/${extractNumberFromString(person.url)}`}));
  }
}
