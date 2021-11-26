import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { setID } from 'src/app/core/helpers/set-id';
import { Film } from 'src/app/core/models/film';
import { FilmsService } from 'src/app/core/services/films.service';

@Component({
  templateUrl: './films-item.component.html',
  styleUrls: ['./films-item.component.scss'],
})
export class FilmsItemComponent implements OnInit {
  data!: Film;
  id!: number;
  characterId!: number[];
  planetId!: number[];

  get img() {
    return `https://starwars-visualguide.com/assets/img/films/${this.id}.jpg`;
  }
  constructor(
    private filmsService: FilmsService,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  getFilmDetails(id: number) {
    this.filmsService.getFilm(id).subscribe((res) => {
      this.data = new Film(res);
      this.characterId = this.data.characters.map((res) => setID(res));
      this.planetId = this.data.planets.map((res) => setID(res));
    });
  }

  ngOnInit(): void {
    this.getFilmDetails(this.id);
  }
}
