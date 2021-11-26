import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters.routing.module';
import { CharactersItemComponent } from './pages/characters-item/character-item.component';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharactersItemComponent,
    CharactersComponent,
  ],
  imports: [CommonModule, CharactersRoutingModule, SharedModule],
})
export class CharacterModule {}
