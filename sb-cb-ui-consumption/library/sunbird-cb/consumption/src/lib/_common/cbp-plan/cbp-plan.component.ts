import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sb-uic-cbp-plan',
  templateUrl: './cbp-plan.component.html',
  styleUrls: ['./cbp-plan.component.scss']
})
export class CbpPlanComponent implements OnInit {

  @Input() objectData: any
  @Input() layoutType:  any
  @Input() mobileHeight: boolean = false
  @Input() fetchDataFromApi: boolean = false
  @Input() channelId: any
  @Output() openDialog = new EventEmitter<any>()
  isLoading: boolean = false

  constructor() { }

  ngOnInit() {
  }


  downloadCBPPlan(item: any): void {
   

    
  }
}
