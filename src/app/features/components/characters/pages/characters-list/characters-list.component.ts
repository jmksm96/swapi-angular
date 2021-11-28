import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
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
  isLoading!: boolean;
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getData();
    this.isLoading = true;
  }

  getData() {
    this.charactersService
      .getAllCharacters()
      .pipe(
        mapPaginatedResponse(Character),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((res) => {
        this.data = res;
      });
  }

  onPageIndexChange(event: number) {
    this.charactersService
      .getAllCharacters(event)
      .pipe(
        mapPaginatedResponse(Character),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((res) => {
        this.data = res;
      });
  }
}
