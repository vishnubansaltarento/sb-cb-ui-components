import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SkeletonLoaderLibComponent } from './skeleton-loader-lib.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatDialogModule, MatIconModule } from '@angular/material'

@NgModule({
  declarations: [SkeletonLoaderLibComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [
    SkeletonLoaderLibComponent,
  ],
  entryComponents: [SkeletonLoaderLibComponent],
})
export class SkeletonLoaderLibModule { }
