import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesItemComponent } from './pages/species-item/species-item.component';
import { SpeciesListComponent } from './pages/species-list/species-list.component';
import { SpeciesComponent } from './species.component';

const routes: Routes = [
  {
    path: '',
    component: SpeciesComponent,
    children: [
      { path: '', component: SpeciesListComponent },
      { path: ':id', component: SpeciesItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeciesRoutingModule {}
