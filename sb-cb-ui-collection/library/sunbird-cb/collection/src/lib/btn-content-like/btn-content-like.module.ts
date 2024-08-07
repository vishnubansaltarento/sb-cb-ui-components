import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { BtnContentLikeComponent } from './btn-content-like.component'

@NgModule({
  declarations: [BtnContentLikeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,
  ],
  exports: [BtnContentLikeComponent],
  entryComponents: [BtnContentLikeComponent],
})
export class BtnContentLikeModule { }
