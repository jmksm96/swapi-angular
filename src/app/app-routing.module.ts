import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
    data: { breadcrumb: 'homepage' },
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./features/components/characters/characters.module').then(
        (m) => m.CharacterModule
      ),
    data: { breadcrumb: 'characters' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
