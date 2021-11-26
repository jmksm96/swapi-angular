import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films.component';
import { FilmsItemComponent } from './pages/films-item/films-item.component';
import { FilmsListComponent } from './pages/films-list/films-list.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
    children: [
      { path: '', component: FilmsListComponent },
      { path: ':id', component: FilmsItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
