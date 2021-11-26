import { Item } from './item';
import { VehicleResponse } from './vehicle';

export interface VehiclesResponse {
  results: VehicleResponse;
}

export class Vehicles
  extends Item<VehiclesResponse>
  implements VehiclesResponse
{
  results!: VehicleResponse;
}
