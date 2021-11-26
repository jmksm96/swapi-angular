import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [PreviewComponent],
  imports: [CommonModule],
  exports: [CommonModule, PreviewComponent],
})
export class ComponentsModule {}
