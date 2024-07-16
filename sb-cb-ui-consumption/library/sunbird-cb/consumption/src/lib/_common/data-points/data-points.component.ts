import { Component, Input, OnInit } from '@angular/core';
import { InsiteDataService } from '../../_services/insite-data.service';

@Component({
  selector: 'sb-uic-data-points',
  templateUrl: './data-points.component.html',
  styleUrls: ['./data-points.component.css']
})
export class DataPointsComponent implements OnInit {
  @Input() objectData: any
  @Input() layoutType: string = ''
  @Input() fetchDataFromApi: boolean = false
  @Input() providerId : any = ''
  @Input() pageLayout: any = ''
  customArray: any[][] = []
  isDataLoading: boolean = false

  // data: any =  [
  //     {
  //         "linebreak": "true",
  //         "background": "banner-metrics",
  //         "icon": "https://portal.karmayogiqa.nic.in/content-store/orgStore/0135071359030722569/1721025178767_Group%202.svg",
  //         "iconColor": "#FFFFFF",
  //         "iconBackgroupColorV2": "#FFFFFF",
  //         "label": "Courses Available",
  //         "value": 32,
  //         "labelColor": "#000000",
  //         "labelColorV2": "#FFFFFF",
  //         "valueColor": "#FFFFFF",
  //         "valueColorV2": "#F3962F",
  //         "valueColorMobV2": "#FFFFFF",
  //         "backgroundV2": "#1B4CA1"
  //     },
  //     {
  //         "linebreak": "true",
  //         "background": "banner-metrics",
  //         "icon": "https://portal.karmayogiqa.nic.in/content-store/orgStore/0135071359030722569/1721022370202_Group.png",
  //         "iconColor": "#FFFFFF",
  //         "iconBackgroupColorV2": "#FFFFFF",
  //         "label": "Course Enrolments",
  //         "value": 1700,
  //         "labelColor": "#000000",
  //         "labelColorv2": "#FFFFFF",
  //         "labelColorV2": "#FFFFFF",
  //         "valueColor": "#FFFFFF",
  //         "valueColorV2": "#F3962F",
  //         "valueColorMobV2": "#FFFFFF",
  //         "backgroundV2": "#1B4CA1"
  //     },
  //     {
  //         "linebreak": "true",
  //         "background": "banner-metrics",
  //         "icon": "https://portal.karmayogiqa.nic.in/content-store/orgStore/0135071359030722569/1721025050947_Group%201.svg",
  //         "iconColor": "#FFFFFF",
  //         "iconBackgroupColorV2": "#FFFFFF",
  //         "label": "Course Completions",
  //         "value": 1300,
  //         "labelColor": "#000000",
  //         "labelColorV2": "#FFFFFF",
  //         "valueColor": "#FFFFFF",
  //         "valueColorV2": "#F3962F",
  //         "valueColorMobV2": "#FFFFFF",
  //         "backgroundV2": "#1B4CA1"
  //     },
  //     {
  //         "linebreak": "true",
  //         "background": "banner-metrics",
  //         "icon": "https://portal.karmayogiqa.nic.in/content-store/orgStore/0135071359030722569/1721024266897_Group.svg",
  //         "iconColor": "#FFFFFF",
  //         "iconBackgroupColorV2": "#FFFFFF",
  //         "label": "Average Course Rating",
  //         "value": 4.1,
  //         "labelColor": "#000000",
  //         "labelColorV2": "#FFFFFF",
  //         "valueColor": "#FFFFFF",
  //         "valueColorV2": "#F3962F",
  //         "valueColorMobV2": "#FFFFFF",
  //         "backgroundV2": "#1B4CA1"
  //     }
  // ]

  constructor(public insightSvc: InsiteDataService) {    
  }

  ngOnInit() {
    if (this.objectData && this.layoutType === 'gridLayout') {
      this.customArray = this.createCustomArray(this.objectData.metrics)
    }
    if(this.fetchDataFromApi) {
      this.isDataLoading = true
      this.getInsiteData()
    }
  }  

  createCustomArray(arr: any[]): any[][] {
    const nByn: any[][] = []
    for (let i = 0; i < arr.length; i += this.objectData.dataColSpan) {
      nByn.push(arr.slice(i, i + this.objectData.dataColSpan))
    }
    return nByn   
  }

  getInsiteData(){
    let request: any = {}
    request  = {
      "request": {
          "filters": {
              "organisations": [
                  this.providerId
              ]
          }
      }
    }
    if (this.pageLayout && this.pageLayout === 'mdo') {
      request  = {
        "request": {
            "filters": {
              "requestType": "MDO_INSIGHT",
                "organisations": [
                    this.providerId
                ]
            }
        }
      }
    }
    this.insightSvc.fetchSearchData(request).subscribe((res: any)=> {
      if(res && res.result && res.result.response && res.result.response.nudges && res.result.response.nudges.length) {
        res.result.response.nudges.forEach((nudgeData: any) => {
          if(this.providerId && this.providerId === nudgeData.orgId) {
            this.objectData = nudgeData.data
            //this.objectData = this.data
          }
        })
      }
      this.isDataLoading = false
    })

  }

}
