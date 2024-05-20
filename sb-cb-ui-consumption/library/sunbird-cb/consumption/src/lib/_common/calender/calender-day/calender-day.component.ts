import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sb-uic-calender-day',
  templateUrl: './calender-day.component.html',
  styleUrls: ['./calender-day.component.scss']
})
export class CalenderDayComponent implements OnInit {

  @Input() objectData: any
  @Input() layoutType: any
  @Input() day: any
  @Input() dataLoading: boolean
  @Input() rowId: any

  constructor() { }

  ngOnInit() {
    console.log("dataLoading  ", this.dataLoading)
  }

}
