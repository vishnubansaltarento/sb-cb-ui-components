import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopLearnersComponent } from './top-learners.component';
import { SkeletonLoaderLibModule } from '../skeleton-loader-lib/skeleton-loader-lib.module';

@NgModule({
  declarations: [TopLearnersComponent],
  imports: [
    CommonModule,
    SkeletonLoaderLibModule
  ],
  exports: [TopLearnersComponent],
})
export class TopLearnersModule { }