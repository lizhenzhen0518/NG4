import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [ ReactiveFormsModule, FormsModule, CommonModule],
  exports: [ ReactiveFormsModule, FormsModule, CommonModule],
  declarations: []
})
export class SharedOuterModule {}
