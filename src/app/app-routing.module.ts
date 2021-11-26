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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
