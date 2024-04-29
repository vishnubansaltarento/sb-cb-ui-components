import { Component, Input, OnInit } from '@angular/core';
import { WidgetBaseComponent, NsWidgetResolver } from '@sunbird-cb/resolver';
import { NsCardContent } from '../../_models/card-content.model';
import { UtilityService } from '@sunbird-cb/utils';

@Component({
  selector: 'sb-uic-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  extends WidgetBaseComponent
implements OnInit, NsWidgetResolver.IWidgetData<NsCardContent.ICard>  {

  @Input() widgetData!: NsCardContent.ICard;
  isIntranetAllowedSettings = false
  constructor(private utilitySvc: UtilityService) {
    super();
  }

  ngOnInit() {
  }

  get isLiveOrMarkForDeletion() {
    if (
      !this.widgetData.content.status ||
      this.widgetData.content.status === 'Live' ||
      this.widgetData.content.status === 'MarkedForDeletion'
    ) {
      return true
    }
    return false
  }

  get showIntranetContent() {
    if (this.widgetData.content.isInIntranet && this.utilitySvc.isMobile) {
      return !this.isIntranetAllowedSettings
    }
    return false
  }

}
