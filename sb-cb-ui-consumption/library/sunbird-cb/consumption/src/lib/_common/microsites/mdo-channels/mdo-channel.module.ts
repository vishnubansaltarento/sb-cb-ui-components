import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule, MatIconModule } from '@angular/material';
import { MdoChannelV1Component } from './mdo-channel-v1/mdo-channel-v1.component';
import { SkeletonLoaderLibModule } from '../../skeleton-loader-lib/skeleton-loader-lib.module';



@NgModule({
  declarations: [MdoChannelV1Component],
  imports: [
    CommonModule,
    MatIconModule,
    MatChipsModule,
    SkeletonLoaderLibModule
  ],
  exports: [MdoChannelV1Component]
})
export class PillsModule { }
