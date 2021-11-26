import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FilmResponse } from '../models/film';
import { FilmsResponse } from '../models/films';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  getAllFilms() {
    return this.http.get<Pagination<FilmsResponse>>(
      environment.backendUrl + '/films'
    );
  }

  getFilm(id: string | number) {
    return this.http.get<FilmResponse>(environment.backendUrl + `/films/${id}`);
  }
}
