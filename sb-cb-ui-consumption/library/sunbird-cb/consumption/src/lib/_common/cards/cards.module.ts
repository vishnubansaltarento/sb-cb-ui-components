import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CardResourceComponent } from './card-resource/card-resource.component';
import { CardsComponent } from './cards.component';
import { CardPortraitComponent } from './card-portrait/card-portrait.component';

@NgModule({
  declarations: [CardResourceComponent, CardsComponent,CardPortraitComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
  ],
  entryComponents:[CardsComponent],
  exports: [CardsComponent,CardResourceComponent,CardPortraitComponent],
})
export class CardsModule { }
