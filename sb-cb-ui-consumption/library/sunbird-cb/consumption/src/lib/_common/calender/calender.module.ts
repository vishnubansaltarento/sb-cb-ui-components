import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './calender.component';
import { MatIconModule } from '@angular/material';
import { SkeletonLoaderLibModule } from '../skeleton-loader-lib/skeleton-loader-lib.module';
import { CalenderDayComponent } from './calender-day/calender-day.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    SkeletonLoaderLibModule
  ],
  declarations: [CalenderComponent, CalenderDayComponent],
  exports: [CalenderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalenderModule {}