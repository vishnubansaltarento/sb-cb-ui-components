import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatButtonModule, MatIconModule, MatMenuModule, MatRippleModule } from '@angular/material'
import { SbUiResolverModule } from '@sunbird-cb/resolver-v2'
import { AvatarPhotoLibComponent } from './avatar-photo-lib.component'

@NgModule({
  declarations: [AvatarPhotoLibComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    SbUiResolverModule,
  ],
  exports: [AvatarPhotoLibComponent],
  entryComponents: [AvatarPhotoLibComponent],
})
export class AvatarPhotoLibModule { }
