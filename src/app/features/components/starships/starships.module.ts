import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StarshipsItemComponent } from './pages/starships-item/starships-item.component';
import { StarshipsListComponent } from './pages/starships-list/starships-list.component';
import { StarshipsComponent } from './starships.component';
import { StarshipsRoutingModule } from './starships.routing.module';

@NgModule({
  declarations: [
    StarshipsComponent,
    StarshipsListComponent,
    StarshipsItemComponent,
  ],
  imports: [CommonModule, StarshipsRoutingModule, SharedModule],
})
export class StarshipsModule {}
