import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { WidgetUserService } from '../../../../_services/widget-user.service';
import { ConfigurationsService, NsContent } from '@sunbird-cb/utils-v2';
import { WidgetContentService } from '../../../../_services/widget-content.service';

@Component({
  selector: 'sb-uic-card-assessment',
  templateUrl: './card-assessment.component.html',
  styleUrls: ['./card-assessment.component.css']
})

// @Directive({
//   selector: '[callFunctionOnInit]'
// })
export class CardAssessmentComponent implements OnInit {
  @Input() widgetData!: NsContent.IContent;
  @Input() enrollmentMapData: any
  @Output() contentData = new EventEmitter<any>()
  @Input() isCardLoading: boolean = false
  stripData: any = []
  enrollList: any = []
  activeResource: any =[]
  defaultThumbnail: any
  defaultSLogo: any
  daysRemaining: number = 0;
  startDate:any
  daysPending:boolean = false
  private intervalId: any;
  constructor(private configSvc: ConfigurationsService, private contSvc: WidgetContentService,) { }

  ngOnInit(): void {
    const instanceConfig = this.configSvc.instanceConfig
    if (instanceConfig) {
      this.defaultThumbnail = instanceConfig.logos.defaultContent || ''
      this.defaultSLogo = instanceConfig.logos.defaultSourceLogo || '/assets/instances/eagle/app_logos/KarmayogiBharat_Logo.svg'
    } else {
      this.defaultThumbnail = '/assets/instances/eagle/app_logos/default.png'
      this.defaultSLogo =  '/assets/instances/eagle/app_logos/KarmayogiBharat_Logo.svg'
    }

  }

  updateStartDate(startDate: string | null):void {
    this.startDate = startDate;     
    this.startCountdown(this.startDate)
  }

   startCountdown(date:any): void {
    console.log(date, "date--=+++")
    // Update the countdown immediately on start
    this.updateCountdown(date);

    // Update the countdown every second
    this.intervalId = setInterval(() => {
      this.updateCountdown(date);
    }, 1000);
  }

  // Method to update the countdown values
   updateCountdown(targetDate:any): void {
    const now = new Date().getTime(); // Current time in milliseconds
    const targetTime = new Date(targetDate).getTime();
    const distance = targetTime - now; // Distance in milliseconds
    if (distance > 0) {
      this.daysRemaining = Math.ceil(distance / (1000 * 60 * 60 * 24));
      this.daysPending = true
    } else {
      this.daysRemaining = 0;
      this.daysPending = false
      this.clearTimer();
    }
  }

  // Method to clear the interval
  clearTimer(): void {
    clearInterval(this.intervalId);
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  getRedirectUrlData(contentData: any){
    console.log(contentData, "contentData========---------------")
    // for telemetry
    if (this.widgetData && this.widgetData.context && this.widgetData.context.pageSection) {
      contentData['typeOfTelemetry'] = this.widgetData.context.pageSection
    }
    this.contSvc.changeTelemetryData(contentData)
    // for redirection
    this.contentData.emit(contentData)
  }

}
