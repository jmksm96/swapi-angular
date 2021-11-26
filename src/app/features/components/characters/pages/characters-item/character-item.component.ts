import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { setID } from 'src/app/core/helpers/set-id';
import { Character } from 'src/app/core/models/character';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
})
export class CharactersItemComponent implements OnInit {
  character!: Character;
  id!: string;
  homeworldId!: number;

  get img() {
    return `https://starwars-visualguide.com/assets/img/characters/${this.id}.jpg`;
  }

  constructor(
    private charactersService: CharactersService,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((res) => {
      this.getCharacterInfo(res.id);
    });
  }

  getCharacterInfo(id: string) {
    this.charactersService.getCharacter(id).subscribe((res) => {
      this.character = new Character(res);
      this.homeworldId = setID(this.character.homeworld);
    });
  }
}
