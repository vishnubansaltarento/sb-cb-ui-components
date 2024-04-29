import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SlidersLibComponent } from './sliders.component'
import { RouterModule } from '@angular/router'
import { NavigationModule, ImageResponsiveModule } from '@sunbird-cb/utils'
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser'
/* tslint:disable */
import  Hammer from 'hammerjs'
/* tslint:enable */
export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-y',
    })
    return mc
  }
}

// tslint:disable-next-line: max-classes-per-file
@NgModule({
  declarations: [SlidersLibComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    ImageResponsiveModule,
  ],
  exports: [SlidersLibComponent],
  entryComponents: [SlidersLibComponent],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
})
export class SlidersLibModule { }
