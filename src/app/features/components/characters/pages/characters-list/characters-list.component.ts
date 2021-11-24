import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/models/character';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
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
