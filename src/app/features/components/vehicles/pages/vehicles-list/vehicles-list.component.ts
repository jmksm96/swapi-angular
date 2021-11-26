import { Component, OnInit } from '@angular/core';
import { mapPaginatedResponse } from 'src/app/core/helpers/map-response';
import { Pagination } from 'src/app/core/models/pagination';
import { Vehicle } from 'src/app/core/models/vehicle';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
})
export class VehiclesListComponent implements OnInit {
  data!: Pagination<Vehicle>;
  constructor(private vehiclesService: VehiclesService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.vehiclesService
      .getAllVehicles()
      .pipe(mapPaginatedResponse(Vehicle))
      .subscribe((res) => {
        this.data = res;
      });
  }
}
