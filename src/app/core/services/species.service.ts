import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { SpeciesItemResponse } from '../models/species';
import { SpeciesResponse } from '../models/species-item';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  constructor(private http: HttpClient) {}

  getAllSpecies() {
    return this.http.get<Pagination<SpeciesResponse>>(
      environment.backendUrl + '/species'
    );
  }

  getSpeciesItem(id: string | number) {
    return this.http.get<SpeciesItemResponse>(
      environment.backendUrl + `/species/${id}`
    );
  }
}
