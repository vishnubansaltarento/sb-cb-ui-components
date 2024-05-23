import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[sbUicScrollableItem]'
})
export class ScrollableItemDirective {

  @Input('sbUicScrollableItem') public key: string
  constructor(private el: ElementRef<HTMLElement>) {}

  public scrollIntoView() {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }


}
