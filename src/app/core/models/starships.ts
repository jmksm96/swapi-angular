import { Item } from './item';
import { VehicleResponse as StarshipResponse } from './vehicle';

export interface StarshipsResponse {
  results: StarshipResponse;
}

export class Starships
  extends Item<StarshipsResponse>
  implements StarshipsResponse
{
  results!: StarshipResponse;
}
