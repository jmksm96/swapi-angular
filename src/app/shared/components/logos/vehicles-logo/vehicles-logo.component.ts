import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/core/models/vehicle';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-vehicles-logo',
  templateUrl: './vehicles-logo.component.html',
  styleUrls: ['./vehicles-logo.component.scss'],
})
export class VehiclesLogoComponent implements OnInit {
  @Input() id!: number;
  vehicle!: Vehicle;

  get img() {
    return `https://starwars-visualguide.com/assets/img/vehicles/${this.id}.jpg`;
  }

  constructor(
    private route: Router,
    private vehiclesService: VehiclesService
  ) {}

  ngOnInit(): void {
    this.getVehicleInfo(this.id);
  }

  getVehicleInfo(id: number) {
    this.vehiclesService.getVehicle(id).subscribe((res) => {
      this.vehicle = new Vehicle(res);
    });
  }
}
