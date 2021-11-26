import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpeciesRoutingModule } from './species.routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SpeciesRoutingModule, SharedModule],
})
export class SpeciesModule {}
