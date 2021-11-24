import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { CharactersItemComponent } from './pages/characters-item/character-item.component';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      { path: '', component: CharactersListComponent },
      { path: ':id', component: CharactersItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
