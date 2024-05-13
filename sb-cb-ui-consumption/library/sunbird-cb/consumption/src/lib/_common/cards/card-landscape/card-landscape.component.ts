import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NsCardContent } from '../../../_models/card-content.model';
import { MatSnackBar } from '@angular/material';
import { ConfigurationsService, EventService } from '@sunbird-cb/utils';
import * as _ from "lodash";
import { TranslateService } from '@ngx-translate/core';
import { MultilingualTranslationsService } from '../../../_services/multilingual-translations.service';
 
@Component({
  selector: 'sb-uic-card-landscape',
  templateUrl: './card-landscape.component.html',
  styleUrls: ['./card-landscape.component.scss']
})
export class CardLandscapeComponent implements OnInit {

  @Input() widgetData!: NsCardContent.ICard;
  @Input() isLiveOrMarkForDeletion: any
  @Input() showIntranetContent: any
  @Input() isIntranetAllowedSettings: any
  @Input() isCardLoading: boolean = false
  @Output() contentData = new EventEmitter<any>()
  isCardFlipped:boolean = false
  defaultThumbnail: any
  acbpConstants = NsCardContent.ACBPConst
  sourceLogos: any
  defaultSLogo: any
  showFlip = false
  widgetType: any = 'df'
  widgetSubType: any ='sdf'
  cbPlanMapData: any
  cbPlanInterval: any
  
  constructor(
    private snackBar: MatSnackBar,
    private events: EventService,
    private translate: TranslateService,
    private langtranslations: MultilingualTranslationsService,
    private configSvc: ConfigurationsService,) { 
      this.langtranslations.languageSelectedObservable.subscribe(() => {
        if (localStorage.getItem('websiteLanguage')) {
          this.translate.setDefaultLang('en')
          const lang = localStorage.getItem('websiteLanguage')!
          this.translate.use(lang)
        }
      })
    }

  ngOnInit() {
    const instanceConfig = this.configSvc.instanceConfig
    if (instanceConfig) {
      this.defaultThumbnail = instanceConfig.logos.defaultContent || ''
      this.sourceLogos = instanceConfig.sources
      this.defaultSLogo = instanceConfig.logos.defaultSourceLogo || ''
    }
    this.cbPlanInterval = setInterval(() => {
      this.getCbPlanData()
    },                                1000)
  }

  showSnackbar() {
    if (this.showIntranetContent) {
      this.snackBar.open('Content is only available in intranet', 'X', { duration: 2000 })
    } else if (!this.isLiveOrMarkForDeletion) {
      this.snackBar.open('Content may be expired or deleted', 'X', { duration: 2000 })
    }
  }
  getRedirectUrlData(contentData: any){
    this.contentData.emit(contentData)
  }
  raiseTelemetry() {
    // if(this.forPreview){
    //   return
    // }
    this.events.raiseInteractTelemetry(
      {
        type: 'click',
        subType: `${this.widgetType}-${this.widgetSubType}`,
        id: `${_.camelCase(this.widgetData.content.primaryCategory)}-card`,
      },
      {
        id: this.widgetData.content.identifier,
        type: this.widgetData.content.primaryCategory,
        //context: this.widgetData.context,
        rollup: {},
        ver: `${this.widgetData.content.version}${''}`,
      },
      {
        pageIdExt: `${_.camelCase(this.widgetData.content.primaryCategory)}-card`,
        module: _.camelCase(this.widgetData.content.primaryCategory),
      })
  }

  getCbPlanData() {
    let cbpList: any={}
    if (localStorage.getItem('cbpData')) {
      let cbpListArr = JSON.parse(localStorage.getItem('cbpData') || '')
      if (cbpListArr && cbpListArr.length) {
        cbpListArr.forEach((data: any) => {
          cbpList[data.identifier] = data
        })
      }
      this.cbPlanMapData = cbpList
      // this.karmaPointLoading = false
      clearInterval(this.cbPlanInterval)
    }
  }


}
