import { NgModule } from '@angular/core';
import { ConsumptionComponent } from './consumption.component';
import { ContentStripWithTabsLibModule } from './_common/content-strip-with-tabs-lib/content-strip-with-tabs-lib.module';



@NgModule({
  declarations: [ConsumptionComponent],
  imports: [
    ContentStripWithTabsLibModule
  ],
  exports: [ConsumptionComponent,
    ContentStripWithTabsLibModule
  ]
})
export class ConsumptionModule { }
