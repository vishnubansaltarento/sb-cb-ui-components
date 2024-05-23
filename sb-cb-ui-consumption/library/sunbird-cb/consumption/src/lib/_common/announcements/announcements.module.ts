import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderLibModule } from '../skeleton-loader-lib/skeleton-loader-lib.module';
import { AnnouncementsComponent } from './announcements.component';



@NgModule({
  declarations: [AnnouncementsComponent],
  imports: [
    CommonModule,
    SkeletonLoaderLibModule
  ],
  exports: [AnnouncementsComponent],
})
export class AnnouncementsModule { }