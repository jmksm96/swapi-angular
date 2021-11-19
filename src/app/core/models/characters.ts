import { CharacterResponse } from './character';

export interface CharactersPaginatedResponse {
  count: number;
  next: string;
  previous: string | null;
  results: CharacterResponse[];
}

export class Characters implements CharactersPaginatedResponse {
  count!: number;
  next!: string;
  previous!: string | null;
  results!: CharacterResponse[];

  constructor(data: CharactersPaginatedResponse) {
    Object.assign(this, data);
  }
}
