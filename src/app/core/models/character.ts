export type CharacterResponse = {
  name: string;
  height: string;
  birth_year: string;
  gender: string;
  hair_color: string;
  mass: string;
  url: string;
  id?: number;
  films: string[];
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  created: string;
  edited: string;
  eye_color: string;
  homeworld: string;
};

export class Character implements CharacterResponse {
  name!: string;
  height!: string;
  birth_year!: string;
  gender!: string;
  hair_color!: string;
  mass!: string;
  url!: string;
  id!: number;
  films!: string[];
  skin_color!: string;
  species!: string[];
  starships!: string[];
  vehicles!: string[];
  created!: string;
  edited!: string;
  eye_color!: string;
  homeworld!: string;

  get img() {
    return `https://starwars-visualguide.com/assets/img/characters/${this.id}.jpg`;
  }

  constructor(data: CharacterResponse) {
    Object.assign(this, data);
  }
}
