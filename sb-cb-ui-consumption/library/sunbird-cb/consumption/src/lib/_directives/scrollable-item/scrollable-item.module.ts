import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ScrollableItemDirective } from './scrollable-item.directive'

@NgModule({
  declarations: [ScrollableItemDirective],
  imports: [
    CommonModule,
  ],
  exports: [ScrollableItemDirective],
})
export class ScrollableItemModule { }
