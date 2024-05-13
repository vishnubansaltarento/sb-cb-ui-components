import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule, MatIconModule } from '@angular/material';
import { PillsComponent } from './pills.component';
import { SkeletonLoaderLibModule } from '../skeleton-loader-lib/skeleton-loader-lib.module';



@NgModule({
  declarations: [PillsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatChipsModule,
    SkeletonLoaderLibModule
  ],
  exports: [PillsComponent]
})
export class PillsModule { }
