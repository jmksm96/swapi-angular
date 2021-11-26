import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersLogoComponent } from './logos/characters-logo/characters-logo.component';
import { FilmsLogoComponent } from './logos/films-logo/films-logo.component';
import { PlanetsLogoComponent } from './logos/planets-logo/planets-logo.component';
import { SpeciesLogoComponent } from './logos/species-logo/species-logo.component';
import { StarshipsLogoComponent } from './logos/starships-logo/starships-logo.component';
import { VehiclesLogoComponent } from './logos/vehicles-logo/vehicles-logo.component';

@NgModule({
  declarations: [
    CharactersLogoComponent,
    PlanetsLogoComponent,
    FilmsLogoComponent,
    VehiclesLogoComponent,
    StarshipsLogoComponent,
    SpeciesLogoComponent,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    CharactersLogoComponent,
    PlanetsLogoComponent,
    FilmsLogoComponent,
    VehiclesLogoComponent,
    StarshipsLogoComponent,
    SpeciesLogoComponent,
  ],
})
export class ComponentsModule {}
