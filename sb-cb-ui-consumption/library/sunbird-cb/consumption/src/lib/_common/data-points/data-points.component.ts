import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sb-uic-data-points',
  templateUrl: './data-points.component.html',
  styleUrls: ['./data-points.component.css']
})
export class DataPointsComponent implements OnInit {
  @Input() objectData: any
  @Input() layoutType: string = ''
  customArray: any[][] = []

  constructor() {    
  }

  ngOnInit() {
    if (this.objectData && this.layoutType === 'gridLayout') {
      this.customArray = this.createCustomArray(this.objectData.data)
    }
  }  

  createCustomArray(arr: any[]): any[][] {
    const nByn: any[][] = []
    for (let i = 0; i < arr.length; i += this.objectData.dataColSpan) {
      nByn.push(arr.slice(i, i + this.objectData.dataColSpan))
    }
    return nByn   
  }

}
