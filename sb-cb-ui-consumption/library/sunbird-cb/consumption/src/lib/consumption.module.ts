import { NgModule } from '@angular/core';
import { ConsumptionComponent } from './consumption.component';
import { ContentStripWithTabsLibModule } from './_common/content-strip-with-tabs-lib/content-strip-with-tabs-lib.module';
import { SlidersLibModule } from '../lib/_common/sliders/sliders.module';
import { DataPointsModule } from './_common/data-points/data-points.module';
import { CalenderModule } from './_common/calender/calender.module';
import { CommonStripModule } from './_common/common-strip/common-strip.module';



@NgModule({
  declarations: [ConsumptionComponent],
  imports: [
    ContentStripWithTabsLibModule,
    SlidersLibModule
  ],
  exports: [ConsumptionComponent,
    ContentStripWithTabsLibModule,
    SlidersLibModule,
    DataPointsModule,
    CalenderModule,
    CommonStripModule
  ],
})
export class ConsumptionModule { }
