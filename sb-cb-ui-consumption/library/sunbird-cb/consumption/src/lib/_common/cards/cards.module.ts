import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CardResourceComponent } from './card-resource/card-resource.component';
import { CardsComponent } from './cards.component';
import { CardPortraitComponent } from './card-portrait/card-portrait.component';
import { PipePublicURLModule } from '../../_pipes/pipe-public-URL/pipe-public-URL.module';
import { DisplayContentTypeLibModule } from '../display-content-type-lib/display-content-type-lib.module';
import { DefaultThumbnailModule } from '../../_directives/default-thumbnail/default-thumbnail.module';
import { PipeDurationTransformModule } from '../../_pipes/pipe-duration-transform/pipe-duration-transform.module';
import { CardUserComponent } from './card-user/card-user.component';
import { SkeletonLoaderLibModule } from '../skeleton-loader-lib/skeleton-loader-lib.module';
import { CardLandscapeComponent } from './card-landscape/card-landscape.component';
import { CardWideComponent } from './card-wide/card-wide.component';
import { CardMDOChannelComponent } from './card-mdo-channel/card-mdo-channel.component';

@NgModule({
  declarations: [
    CardResourceComponent,
    CardsComponent,CardPortraitComponent,
    CardUserComponent,
    CardLandscapeComponent,
    CardWideComponent,
    CardMDOChannelComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    PipePublicURLModule,
    DisplayContentTypeLibModule,
    DefaultThumbnailModule,
    PipeDurationTransformModule,
    SkeletonLoaderLibModule
  ],
  entryComponents:[CardsComponent],
  exports: [
    CardsComponent,
    CardResourceComponent,
    CardPortraitComponent, 
    CardLandscapeComponent,
    CardUserComponent,
    CardWideComponent,
    CardMDOChannelComponent
  ],
})
export class CardsModule { }
