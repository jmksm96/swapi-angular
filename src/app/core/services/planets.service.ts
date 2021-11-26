import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { PlanetResponse } from '../models/planet';
import { PlanetsResponse } from '../models/planets';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getAllPlanets() {
    return this.http.get<Pagination<PlanetsResponse>>(
      environment.backendUrl + '/planets'
    );
  }

  getPlanet(id: number) {
    return this.http.get<PlanetResponse>(
      environment.backendUrl + `/planets/${id}`
    );
  }
}
