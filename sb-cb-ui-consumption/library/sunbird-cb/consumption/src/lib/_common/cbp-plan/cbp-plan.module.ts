import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbpPlanComponent } from './cbp-plan.component';
import { SkeletonLoaderLibModule } from '../skeleton-loader-lib/skeleton-loader-lib.module';
import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [CbpPlanComponent],
  imports: [
    CommonModule,
    SkeletonLoaderLibModule,
    MatIconModule,
  ],
  exports: [CbpPlanComponent]
})
export class CbpPlanModule { }
