import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPointsComponent } from './data-points.component';



@NgModule({
  declarations: [DataPointsComponent],
  imports: [
    CommonModule
  ],
  exports: [DataPointsComponent],
})
export class DataPointsModule { }
