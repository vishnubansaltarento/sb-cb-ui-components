import {
  Component,
  Input,
  OnInit,
  
} from '@angular/core';

@Component({
  selector: 'sb-uic-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  @Input() objectData: any
  @Input() layoutType: any
  @Input() fetchDataFromApi: boolean = false
  isDataLoading: boolean = false

  toDay = new Date()

  ngOnInit() {
    if(this.fetchDataFromApi) {
      this.isDataLoading = true
      this.getInsiteData()
    }

  }
  getInsiteData() {
    setTimeout(() => {
      this.isDataLoading = false
      // tslint:disable-next-line: align
    }, 10000)
  }
  
 
}
