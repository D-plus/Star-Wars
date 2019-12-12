import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../../interfaces/planet.interface';
import { URLS } from '../../constants/urls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getPlanet(id: number): Observable<Planet> {
    return this.http.get(`${URLS.PLANETS}/${id}/`) as Observable<Planet>;
  }
}
