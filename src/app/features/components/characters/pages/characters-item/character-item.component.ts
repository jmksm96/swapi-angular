import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      console.log(this.character);
    });
  }
}
