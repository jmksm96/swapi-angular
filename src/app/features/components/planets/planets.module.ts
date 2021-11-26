import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlanetItemComponent } from './pages/planet-item/planet-item.component';
import { PlanetsListComponent } from './pages/planets-list/planets-list.component';
import { PlanetsComponent } from './planets.component';
import { PlanetsRoutingModule } from './planets.routing.module';

@NgModule({
  declarations: [PlanetsComponent, PlanetsListComponent, PlanetItemComponent],
  imports: [CommonModule, PlanetsRoutingModule, SharedModule],
})
export class PlanetsModule {}
