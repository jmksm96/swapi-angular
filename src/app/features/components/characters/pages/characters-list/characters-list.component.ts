import { Component, OnInit } from '@angular/core';
import { mapPaginatedResponse } from 'src/app/core/helpers/map-response';
import { Character } from 'src/app/core/models/character';
import { Pagination } from 'src/app/core/models/pagination';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  data!: Pagination<Character>;
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.charactersService
      .getAllCharacters()
      .pipe(mapPaginatedResponse(Character))
      .subscribe((res) => {
        this.data = res;
      });
  }
}
