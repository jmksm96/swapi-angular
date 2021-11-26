import { CharacterResponse } from './character';
import { Item } from './item';

export interface PlanetsResponse {
  results: CharacterResponse;
}

export class Planets extends Item<PlanetsResponse> implements PlanetsResponse {
  results!: CharacterResponse;
}
