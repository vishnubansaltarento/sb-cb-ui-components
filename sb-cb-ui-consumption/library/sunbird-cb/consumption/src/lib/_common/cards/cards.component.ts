import { Component, Input, OnInit } from '@angular/core';
import { WidgetBaseComponent, NsWidgetResolver } from '@sunbird-cb/resolver';
import { NsCardContent } from '../../_models/card-content.model';
import { UtilityService } from '@sunbird-cb/utils';
import { ConfigurationsService } from '../../_services/configurations.service';
import { WidgetContentService } from '../../_services/widget-content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-uic-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent  extends WidgetBaseComponent
implements OnInit, NsWidgetResolver.IWidgetData<NsCardContent.ICard>  {

  @Input() widgetData!: NsCardContent.ICard;
  isIntranetAllowedSettings = false
  constructor(private utilitySvc: UtilityService,
    private configSvc: ConfigurationsService,
    private contSvc: WidgetContentService,
    public router: Router
  ) {
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
  async getRedirectUrlData(content: any){
    let urlData = await this.contSvc.getResourseLink(content)
    this.router.navigate(
      [urlData.url],
      {
        queryParams: urlData.queryParams
      })
  }
}
