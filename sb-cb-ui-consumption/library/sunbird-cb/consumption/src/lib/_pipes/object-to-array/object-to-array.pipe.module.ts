import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ObjectToArrayPipe } from './object-to-array.pipe'

@NgModule({
  declarations: [ObjectToArrayPipe],
  imports: [
    CommonModule,
  ],
  exports: [ObjectToArrayPipe],
})
export class ObjectToArrayPipeModule { }