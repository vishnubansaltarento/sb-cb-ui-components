import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule, MatIconModule, MatTabsModule } from '@angular/material';
import { MdoChannelV1Component } from './mdo-channel-v1/mdo-channel-v1.component';
import { SkeletonLoaderLibModule } from '../../skeleton-loader-lib/skeleton-loader-lib.module';

import {
  AnnouncementsModule,
  CardsModule,
  CommonMethodsService,
  CommonStripModule,
  CompetencyPassbookModule,
  CompetencyPassbookMdoModule,
  ContentStripWithTabsLibModule,
  DataPointsModule,
  SlidersLibModule,
  HttpLoaderFactory,
  TopLearnersModule,
} from './../../../../public-api'
import { MdoChannelV2Component } from './mdo-channel-v2/mdo-channel-v2.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [MdoChannelV1Component, MdoChannelV2Component],
  imports: [
    CommonModule,
    MatIconModule,
    MatChipsModule,
    SkeletonLoaderLibModule,
    AnnouncementsModule,
    TopLearnersModule,
    CardsModule,
    CommonStripModule,
    CompetencyPassbookModule,
    CompetencyPassbookMdoModule,
    ContentStripWithTabsLibModule,
    DataPointsModule,
    SlidersLibModule,
    MatTabsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [MdoChannelV1Component, MdoChannelV2Component],
  providers:[
    CommonMethodsService],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MDOChannelModule { }
