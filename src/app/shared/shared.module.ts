import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, ModulesModule],
})
export class SharedModule {}
