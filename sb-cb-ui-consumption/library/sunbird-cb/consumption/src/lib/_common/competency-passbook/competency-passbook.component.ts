import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationsService, EventService } from '@sunbird-cb/utils';
import { WidgetContentService } from '../../_services/widget-content.service';
import { CompetencyPassbookService } from './competency-passbook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-uic-competency-passbook',
  templateUrl: './competency-passbook.component.html',
  styleUrls: ['./competency-passbook.component.scss']
})
export class CompetencyPassbookComponent implements OnInit {

  @Input() objectData: any
  loadCometency: boolean = false
  loadCompetencyArea: boolean = false

  orgId: any
  competencyArea: any []
  selectedValue: any;
  competencyVersion:string = ''
  competencyTheme: any = []
  allcompetencyTheme: any ={}
  competencyStrength: any = 0
  competencyThemeLength: any = 6
  showAllTheme : any = [{name:'Show all', showAll: false}]

  // subTheme = ['Behavioural']
  // currentFilter = 'Behavioural'
  // currentCompetencies: any = []
  // competencyData: any
  constructor(public configSvc: ConfigurationsService,
    public contentSvc:WidgetContentService,
    public competencySvc: CompetencyPassbookService,
    public router : Router
  ) { 
    
  }

 
  ngOnInit() {
    if(this.configSvc && this.configSvc.userProfile.rootOrgId) {
      this.orgId = this.configSvc.userProfile.rootOrgId
    }
    this.getCompetencyArea()
    this.getAllCompetencies()
    // this.competencyData = this.objectData
    // this.filter(this.currentFilter)
  }
  // filter(filterValue: string) {
  //   this.currentFilter = filterValue
  //   this.currentCompetencies = this.competencyData.data.filter((item: any) => item.type === filterValue)
  // }
  showMore() {
    this.objectData.viewMore = !this.objectData.viewMore
  }

  // to get competency area from facets
  async getCompetencyArea(){
    this.loadCompetencyArea = true
    let request = {
        "request": {
            "query": "",
            "filters": {
                "contentType":"Course",
                "channel": [
                   this.orgId
                ],
                "status": [
                    "Live"
                ]
            },
            "sort_by": {
                "lastUpdatedOn": "desc"
            },
            "facets": [
                "competencies_v5.competencyArea"
            ],
            "limit": 0,
            "offset": 0,
            "fields": [
            ]
        }
      }
    
    try {
      const response = await this.callCompetencySearch(request);
      if (response && response.results) {
        if(response.results.result.facets){
          this.competencyArea = response.results.result.facets[0].values
          this.competencyStrength = this.competencyArea.reduce((partialSum: any, data: any) => partialSum +  data.count, 0) 
          this.selectedValue  = this.competencyArea[0].name.toLowerCase()
          this.getcompetencyTheme(this.competencyArea[0].name)
          this.loadCompetencyArea = false
        }
      }
    } catch (error) {
      // Handle errors
      // console.error('Error:', error);
    }
  }

  async callCompetencySearch(request){
    return new Promise<any>((resolve, reject) => {
      if (request && request) {
        this.contentSvc.searchV6(request).subscribe(results => {
            resolve({ results });
          },(error: any) => {
            reject(error);
          },
        );
      }
    });
  }

  // competency theam change
  competencyChange(e){
    this.getcompetencyTheme(e.name)
    this.selectedValue = e.name
  }
  getAllCompetencies(){
    this.loadCometency = true
    let request = {"search":{"type":"Competency Area"},"filter":{"isDetail":true}}
    this.competencySvc.getCompetencyList(request).subscribe((response: any) => {
      this.allcompetencyTheme = {}
      if(response && response.result && response.result.competency) {
        response.result.competency.forEach(element => {
          element.children.forEach((childEle) => {
            let name = childEle.name.toLowerCase()
            this.allcompetencyTheme[name] = childEle
            this.allcompetencyTheme[name]['viewMore'] = false
          });
        });
      }
      this.loadCometency = false
    })
  }

  async getcompetencyTheme(value: any) {
    let request = {
      "request": {
          "query": "",
          "filters": {
              "contentType":"Course",
              "channel": [
                 this.orgId
              ],
              "competencies_v5.competencyArea" : value,
              "status": [
                  "Live"
              ]
          },
          "sort_by": {
              "lastUpdatedOn": "desc"
          },
          "facets": [
              "competencies_v5.competencyTheme"
          ],
          "limit": 0,
          "offset": 0,
          "fields": [
          ]
      }
    }
  
  try {
    this.loadCometency = true
    const response = await this.callCompetencySearch(request);
    if (response && response.results) {
      if(response.results.result.facets){
        this.competencyTheme = response.results.result.facets[0].values 
      }
      this.loadCometency = false
    }
  } catch (error) {
    // Handle errors
    // console.error('Error:', error);
  }
  }
  viewMoreChildren(data: any) {
    data.viewMore = !data.viewMore
  }
  displayAllTheme(event: any) {
    this.showAllTheme[0]['showAll'] = !event.showAll 
    this.competencyThemeLength = event.showAll ?  this.competencyTheme.length : 6
    this.showAllTheme[0]['name'] = event.showAll ? 'Show less' : 'Show all'
  }

  navigateToCompetency(compData: any){
    this.router.navigateByUrl(`app/learn/browse-by/competency/${compData.name}`)
  }
}
