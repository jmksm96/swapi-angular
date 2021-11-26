import { Component, OnInit } from '@angular/core';
import { mapPaginatedResponse } from 'src/app/core/helpers/map-response';
import { Pagination } from 'src/app/core/models/pagination';
import { Planet } from 'src/app/core/models/planet';
import { PlanetsService } from 'src/app/core/services/planets.service';

@Component({
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
})
export class PlanetsListComponent implements OnInit {
  data!: Pagination<Planet>;
  constructor(private dataService: PlanetsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService
      .getAllPlanets()
      .pipe(mapPaginatedResponse(Planet))
      .subscribe((res) => {
        this.data = res;
      });
  }
}
