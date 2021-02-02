import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { MaterialModule } from '@ngnx/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
})
export class UiToolbarModule {}
