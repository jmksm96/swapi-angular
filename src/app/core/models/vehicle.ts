export interface VehicleResponse {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  id: number;
}

export class Vehicle implements VehicleResponse {
  name!: string;
  model!: string;
  manufacturer!: string;
  cost_in_credits!: string;
  length!: string;
  max_atmosphering_speed!: string;
  crew!: string;
  passengers!: string;
  cargo_capacity!: string;
  consumables!: string;
  vehicle_class!: string;
  pilots!: string[];
  films!: string[];
  created!: string;
  edited!: string;
  url!: string;
  id!: number;

  get img() {
    return `https://starwars-visualguide.com/assets/img/vehicles/${this.id}.jpg`;
  }

  constructor(data: VehicleResponse) {
    Object.assign(this, data);
  }
}
