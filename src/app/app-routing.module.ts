import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./features/components/characters/characters.module').then(
        (m) => m.CharacterModule
      ),
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./features/components/planets/planets.module').then(
        (m) => m.PlanetsModule
      ),
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./features/components/films/films.module').then(
        (m) => m.FilmsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
