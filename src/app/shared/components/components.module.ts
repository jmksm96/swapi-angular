import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersLogoComponent } from './logos/characters-logo/characters-logo.component';
import { PlanetsLogoComponent } from './logos/planets-logo/planets-logo.component';

@NgModule({
  declarations: [CharactersLogoComponent, PlanetsLogoComponent],
  imports: [CommonModule],
  exports: [CommonModule, CharactersLogoComponent, PlanetsLogoComponent],
})
export class ComponentsModule {}
