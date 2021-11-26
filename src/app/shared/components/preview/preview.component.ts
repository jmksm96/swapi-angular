import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/core/models/character';
import { Planet } from 'src/app/core/models/planet';
import { CharactersService } from 'src/app/core/services/characters.service';
import { PlanetsService } from 'src/app/core/services/planets.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  @Input() id!: number;
  character!: Character;
  planet!: Planet;
  category!: string;
  // starships!
  // films!
  // vehicles!
  // species!
  isCharacter!: boolean;
  isPlanet!: boolean;

  get img() {
    return `https://starwars-visualguide.com/assets/img/${this.category}/${this.id}.jpg`;
  }

  constructor(
    private route: Router,
    private charactersService: CharactersService,
    private planetService: PlanetsService
  ) {}

  ngOnInit(): void {
    console.log(this.id);

    this.checkPage();
  }

  checkPage() {
    if (this.route.url.includes('planets')) {
      this.category = 'characters';
      this.isCharacter = true;
      this.getCharacterInfo(this.id);
    } else if (this.route.url.includes('characters')) {
    } else if (this.route.url.includes('films')) {
      console.log('films');
    } else if (this.route.url.includes('vehicles')) {
      console.log('vehicles');
    } else if (this.route.url.includes('species')) {
      console.log('species');
    } else if (this.route.url.includes('starships')) {
      console.log('starships');
    }
  }

  getCharacterInfo(id: number) {
    this.charactersService.getCharacter(id).subscribe((res) => {
      this.character = new Character(res);
    });
  }
  getPlanetInfo(id: number) {
    this.planetService.getPlanet(id).subscribe((res) => {
      this.planet = new Planet(res);
    });
  }
  // getCharacterInfo(id: number) {
  //   this.charactersService.getCharacter(id).subscribe((res) => {
  //     this.character = new Character(res);
  //   });
  // }
  // getCharacterInfo(id: number) {
  //   this.charactersService.getCharacter(id).subscribe((res) => {
  //     this.character = new Character(res);
  //   });
  // }
  // getCharacterInfo(id: number) {
  //   this.charactersService.getCharacter(id).subscribe((res) => {
  //     this.character = new Character(res);
  //   });
  // }
  // getCharacterInfo(id: number) {
  //   this.charactersService.getCharacter(id).subscribe((res) => {
  //     this.character = new Character(res);
  //   });
  // }
}
