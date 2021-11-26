import { Item } from './item';
import { SpeciesItemResponse } from './species';

export interface SpeciesResponse {
  results: SpeciesItemResponse;
}

export class Species
  extends Item<SpeciesItemResponse>
  implements SpeciesResponse
{
  results!: SpeciesItemResponse;
}
