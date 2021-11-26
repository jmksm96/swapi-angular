import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsItemComponent } from './pages/starships-item/starships-item.component';
import { StarshipsListComponent } from './pages/starships-list/starships-list.component';
import { StarshipsComponent } from './starships.component';

const routes: Routes = [
  {
    path: '',
    component: StarshipsComponent,
    children: [
      { path: '', component: StarshipsListComponent },
      { path: ':id', component: StarshipsItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarshipsRoutingModule {}
