export interface SpeciesItemResponse {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  id: number;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export class SpeciesItem implements SpeciesItemResponse {
  name!: string;
  classification!: string;
  designation!: string;
  average_height!: string;
  skin_colors!: string;
  hair_colors!: string;
  eye_colors!: string;
  average_lifespan!: string;
  homeworld!: string;
  language!: string;
  id!: number;
  people!: string[];
  films!: string[];
  created!: string;
  edited!: string;
  url!: string;

  get img() {
    return `https://starwars-visualguide.com/assets/img/species/${this.id}.jpg`;
  }

  constructor(data: SpeciesItemResponse) {
    Object.assign(this, data);
  }
}
