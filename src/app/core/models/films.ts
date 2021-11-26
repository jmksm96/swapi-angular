import { FilmResponse } from './film';
import { Item } from './item';

export interface FilmsResponse {
  results: FilmResponse;
}

export class Characters extends Item<FilmsResponse> implements FilmsResponse {
  results!: FilmResponse;
}
