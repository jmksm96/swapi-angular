export interface StarshipResponse {
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
  hyperdrive_rating: string;
  mGLT: string;
  starship_class: string;
  pilots: any[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  id: number;
}

export class Starship implements StarshipResponse {
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
  hyperdrive_rating!: string;
  mGLT!: string;
  starship_class!: string;
  pilots!: any[];
  films!: string[];
  created!: string;
  edited!: string;
  url!: string;
  id!: number;

  get img() {
    return `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`;
  }

  constructor(data: StarshipResponse) {
    Object.assign(this, data);
  }
}
