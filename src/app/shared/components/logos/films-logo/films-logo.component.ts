import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/core/models/film';
import { FilmsService } from 'src/app/core/services/films.service';

@Component({
  selector: 'app-films-logo',
  templateUrl: './films-logo.component.html',
  styleUrls: ['./films-logo.component.scss'],
})
export class FilmsLogoComponent implements OnInit {
  @Input() id!: number;
  film!: Film;

  get img() {
    return `https://starwars-visualguide.com/assets/img/films/${this.id}.jpg`;
  }

  constructor(private route: Router, private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.getCharacterInfo(this.id);
  }

  getCharacterInfo(id: number) {
    this.filmsService.getFilm(id).subscribe((res) => {
      this.film = new Film(res);
    });
  }
}
