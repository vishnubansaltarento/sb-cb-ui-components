import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './calender.component';
import { MatIconModule } from '@angular/material';
import { SkeletonLoaderLibModule } from '../skeleton-loader-lib/skeleton-loader-lib.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    SkeletonLoaderLibModule
  ],
  declarations: [CalenderComponent],
  exports: [CalenderComponent],
})
export class CalenderModule {}