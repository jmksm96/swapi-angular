import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { VehiclesItemComponent } from './pages/vehicles-item/vehicles-item.component';
import { VehiclesListComponent } from './pages/vehicles-list/vehicles-list.component';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesRoutingModule } from './vehicles.routing.module';

@NgModule({
  declarations: [
    VehiclesComponent,
    VehiclesItemComponent,
    VehiclesListComponent,
  ],
  imports: [CommonModule, VehiclesRoutingModule, SharedModule],
})
export class VehiclesModule {}
