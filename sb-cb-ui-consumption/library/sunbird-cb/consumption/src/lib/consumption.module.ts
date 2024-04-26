import { NgModule } from '@angular/core';
import { ConsumptionComponent } from './consumption.component';
import { ContentStripWithTabsLibModule } from './_common/content-strip-with-tabs-lib/content-strip-with-tabs-lib.module';
import { DataPointsModule } from './_common/data-points/data-points.module';



@NgModule({
  declarations: [ConsumptionComponent],
  imports: [
    ContentStripWithTabsLibModule,
    DataPointsModule
  ],
  exports: [ConsumptionComponent,
    ContentStripWithTabsLibModule,
    DataPointsModule
  ]
})
export class ConsumptionModule { }
