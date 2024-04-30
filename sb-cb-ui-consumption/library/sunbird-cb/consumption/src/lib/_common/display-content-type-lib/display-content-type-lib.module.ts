import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DisplayContentTypeLibComponent } from './display-content-type-lib.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
  declarations: [DisplayContentTypeLibComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [DisplayContentTypeLibComponent],
})
export class DisplayContentTypeLibModule {}
