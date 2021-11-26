import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetItemComponent } from './pages/planet-item/planet-item.component';
import { PlanetsListComponent } from './pages/planets-list/planets-list.component';
import { PlanetsComponent } from './planets.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    children: [
      { path: '', component: PlanetsListComponent },
      { path: ':id', component: PlanetItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
