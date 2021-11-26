import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { StarshipResponse } from '../models/starship';
import { StarshipsResponse } from '../models/starships';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  constructor(private http: HttpClient) {}

  getAllSpecies() {
    return this.http.get<Pagination<StarshipsResponse>>(
      environment.backendUrl + '/species'
    );
  }

  getSpeciesItem(id: string | number) {
    return this.http.get<StarshipResponse>(
      environment.backendUrl + `/species/${id}`
    );
  }
}
