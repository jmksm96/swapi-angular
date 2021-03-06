import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { VehicleResponse } from '../models/vehicle';
import { VehiclesResponse } from '../models/vehicles';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor(private http: HttpClient) {}

  getAllVehicles() {
    return this.http.get<Pagination<VehiclesResponse>>(
      environment.backendUrl + '/vehicles'
    );
  }

  getVehicle(id: string | number) {
    return this.http.get<VehicleResponse>(
      environment.backendUrl + `/vehicles/${id}`
    );
  }
}
