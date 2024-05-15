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

  toDay = new Date()

  ngOnInit() {

    console.log("data ===== ", this.objectData)
    console.log("toDay ", this.toDay)

  }
  
 
}
