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
  customArray: any[][] = []
  isDataLoading: boolean = false

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
    let request: any = {
      "request": {
          "filters": {
              "organisations": [
                  this.providerId
              ]
          }
      }
    }
    this.insightSvc.fetchSearchData(request).subscribe((res: any)=> {
      if(res && res.result && res.result.response && res.result.response.nudges && res.result.response.nudges.length) {
        res.result.response.nudges.forEach((nudgeData: any) => {
          if(this.providerId && this.providerId === nudgeData.orgId) {
            this.objectData = nudgeData.data
          }
        })
      }
      this.isDataLoading = false
    })

  }

}
