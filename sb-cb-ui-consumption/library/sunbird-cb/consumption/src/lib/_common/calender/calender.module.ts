import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CalenderComponent } from './calender.component';
import { MatIconModule } from '@angular/material';
import { SkeletonLoaderLibModule } from '../skeleton-loader-lib/skeleton-loader-lib.module';
import { CalenderDayComponent } from './calender-day/calender-day.component';
import { InsiteDataService } from '../../_services/insite-data.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    SkeletonLoaderLibModule
  ],
  declarations: [CalenderComponent, CalenderDayComponent],
  exports: [CalenderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[DatePipe, InsiteDataService],
})
export class CalenderModule {}