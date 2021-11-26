import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilmsComponent } from './films.component';
import { FilmsRoutingModule } from './films.routing.module';
import { FilmsItemComponent } from './pages/films-item/films-item.component';
import { FilmsListComponent } from './pages/films-list/films-list.component';

@NgModule({
  declarations: [FilmsComponent, FilmsListComponent, FilmsItemComponent],
  imports: [CommonModule, FilmsRoutingModule, SharedModule],
})
export class FilmsModule {}
