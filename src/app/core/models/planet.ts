export interface PlanetResponse {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  id: number;
}

export class Planet implements PlanetResponse {
  name!: string;
  rotation_period!: string;
  orbital_period!: string;
  diameter!: string;
  climate!: string;
  gravity!: string;
  terrain!: string;
  surface_water!: string;
  population!: string;
  residents!: string[];
  films!: string[];
  created!: string;
  edited!: string;
  url!: string;
  id!: number;

  get img() {
    return `https://starwars-visualguide.com/assets/img/planets/${this.id}.jpg`;
  }

  constructor(data: PlanetResponse) {
    Object.assign(this, data);
  }
}
