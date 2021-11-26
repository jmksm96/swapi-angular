import { Component, OnInit } from '@angular/core';
import { mapPaginatedResponse } from 'src/app/core/helpers/map-response';
import { Film } from 'src/app/core/models/film';
import { Pagination } from 'src/app/core/models/pagination';
import { FilmsService } from 'src/app/core/services/films.service';

@Component({
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss'],
})
export class FilmsListComponent implements OnInit {
  data!: Pagination<Film>;
  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.filmsService
      .getAllFilms()
      .pipe(mapPaginatedResponse(Film))
      .subscribe((res) => {
        this.data = res;
      });
  }
}
