export interface FilmResponse {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  id: number;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export class Film implements FilmResponse {
  title!: string;
  episode_id!: number;
  opening_crawl!: string;
  director!: string;
  producer!: string;
  release_date!: string;
  id!: number;
  characters!: string[];
  planets!: string[];
  starships!: string[];
  vehicles!: string[];
  species!: string[];
  created!: string;
  edited!: string;
  url!: string;

  get img() {
    return `https://starwars-visualguide.com/assets/img/films/${this.id}.jpg`;
  }

  constructor(data: FilmResponse) {
    Object.assign(this, data);
  }
}
