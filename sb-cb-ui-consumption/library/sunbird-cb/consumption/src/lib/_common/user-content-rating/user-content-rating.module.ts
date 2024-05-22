import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule, MatIconModule } from '@angular/material';
import { UserContentRatingComponent } from './user-content-rating.component';
import { SkeletonLoaderLibModule } from '../skeleton-loader-lib/skeleton-loader-lib.module';
import { SlidersLibModule } from '../sliders/sliders.module';
import { RatingService } from '../../_services/rating.service';
import { CardsModule } from '../cards/cards.module';
import { AvatarPhotoLibModule } from '../avatar-photo-lib/avatar-photo-lib.module';
import { SlidersNgContentLibModule } from '../sliders-ng-content/sliders-ng-content.module';



@NgModule({
  declarations: [UserContentRatingComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatChipsModule,
    SkeletonLoaderLibModule,
    SlidersLibModule,
    CardsModule,
    AvatarPhotoLibModule,
    SlidersNgContentLibModule
  ],
  exports: [UserContentRatingComponent],
  providers: [RatingService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UserContentRatingModule { }
