import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPointsComponent } from './data-points.component';
import { InsiteDataService } from '../../_services/insite-data.service';
import { SkeletonLoaderLibModule } from '../skeleton-loader-lib/skeleton-loader-lib.module';



@NgModule({
  declarations: [DataPointsComponent],
  imports: [
    CommonModule,
    SkeletonLoaderLibModule
  ],
  exports: [DataPointsComponent],
  providers:[InsiteDataService]
})
export class DataPointsModule { }
