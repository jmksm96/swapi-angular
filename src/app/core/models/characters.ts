import { CharacterResponse } from './character';
import { Item } from './item';

export interface CharactersPaginatedResponse {
  results: CharacterResponse;
}

export class Characters
  extends Item<CharactersPaginatedResponse>
  implements CharactersPaginatedResponse
{
  results!: CharacterResponse;
}
