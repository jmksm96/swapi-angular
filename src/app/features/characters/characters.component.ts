import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/models/character';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  data!: Character[];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.charactersService.getAllCharacters().subscribe((res) => {
      this.data = res;
    });
  }
}
