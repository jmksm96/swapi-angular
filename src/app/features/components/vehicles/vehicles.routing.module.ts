import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesItemComponent } from './pages/vehicles-item/vehicles-item.component';
import { VehiclesListComponent } from './pages/vehicles-list/vehicles-list.component';
import { VehiclesComponent } from './vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
    children: [
      { path: '', component: VehiclesListComponent },
      { path: ':id', component: VehiclesItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclesRoutingModule {}
