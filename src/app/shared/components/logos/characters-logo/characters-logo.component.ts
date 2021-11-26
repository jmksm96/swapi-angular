import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/core/models/character';
import { CharactersService } from 'src/app/core/services/characters.service';
import { FilmsService } from 'src/app/core/services/films.service';
import { PlanetsService } from 'src/app/core/services/planets.service';

@Component({
  selector: 'app-characters-logo',
  templateUrl: './characters-logo.component.html',
  styleUrls: ['./characters-logo.component.scss'],
})
export class CharactersLogoComponent implements OnInit {
  @Input() id!: number;
  character!: Character;

  get img() {
    return `https://starwars-visualguide.com/assets/img/characters/${this.id}.jpg`;
  }

  constructor(
    private route: Router,
    private charactersService: CharactersService,
    private filmsService: FilmsService,
    private planetService: PlanetsService
  ) {}

  ngOnInit(): void {
    this.getCharacterInfo(this.id);
  }

  getCharacterInfo(id: number) {
    this.charactersService.getCharacter(id).subscribe((res) => {
      this.character = new Character(res);
    });
  }
}
