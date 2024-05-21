import { DatePipe } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  
} from '@angular/core';
import { InsiteDataService } from '../../_services/insite-data.service';

@Component({
  selector: 'sb-uic-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  @Input() objectData: any
  @Input() layoutType: any
  @Input() fetchDataFromApi: boolean = false
  @Input() showHeader: boolean = false
  @Input() defaultDays: number = 3
  @Input() providerId: any
  @Input() fullCalendor: boolean = false
  days = []
  trainings: any = {}
  currentMonthAndYear: any
  isDataLoading: boolean = false
  currentDate = new Date()
  endDate: any
  startDate: any
  constructor(private datePipe: DatePipe, public insightSvc: InsiteDataService) { }

  ngOnInit() {
    this.currentMonthAndYear = this.datePipe.transform( this.currentDate, 'MMMM y')
    if (this.fullCalendor) {
      this.days = this.getDaysInMonth(this.currentDate.getFullYear(), this.currentDate.getMonth())
    }
    if (!this.fullCalendor) {
      this.days = this.getDays(this.currentDate, +this.defaultDays)
    }
    console.log("days ", this.days)
    this.startDate = this.days[0]
    this.endDate = this.days[this.days.length - 1]
    if(this.fetchDataFromApi) {
      this.isDataLoading = true
      this.getInsiteData()
    }
  }
  getInsiteData() {
    let request = {
      "locale": [
          "en"
      ],
      "query": "",
      "request": {
          "query": "",
          "filters": {
              "category": [
                  "Calendar"
              ],
              "status": [
                  "Live",
                  "Retired"
              ],
              "contentType": "Event",
              "startDate": {
                ">=": this.startDate,
                "<=": this.endDate
                // ">=": "2024-01-15",
                // "<": "2024-05-31"
              },
              "channel": [this.providerId]
          },
          "sort_by": {
              "lastUpdatedOn": "desc"
          }
      }
    }
    this.insightSvc.fetchTrainingDetails(request).subscribe((res: any)=> {
      if (res && res.result && res.result.Event) {
        res.result.Event.forEach((resp: any) => {
          if (this.trainings[resp.startDate]) {
            let prevData = this.trainings[resp.startDate]
            let location = resp.eventType
            if (resp.venue && location !== "Online") {
              const jsonResp = JSON.parse(resp.venue)
              location = jsonResp['address']
            }
            const formatObject = {
              location: location,
              startTime: this.convertTo12HourFormat(resp.startTime),
              endTime: this.convertTo12HourFormat(resp.endTime),
              title: resp.name,
              startDate: this.formatDate(resp.startDate),
              endDate: this.formatDate(resp.endDate),
              registrationLink: resp.registrationLink,
            }
            prevData.push(formatObject)
            this.trainings[resp.startDate] = prevData
          }
        })
      }
      this.isDataLoading = false
    })
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  formatDate(date: any) {
    let formatDate = new Date(date)
    return this.datePipe.transform(formatDate, 'E, dd LLL')
  }

  convertTo12HourFormat(timeString: string): string {
    const time = timeString.split(":")
    let hours = +time[0]
    const minutes = +time[1]
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    const strHours = hours < 10 ? '0' + hours : hours.toString()
    const strMinutes = minutes < 10 ? '0' + minutes : minutes.toString()
    return `${strHours}:${strMinutes}: ${ampm}`
  }

  getDays(cDate: any, counter: number) {
    const days: any = []
    let initDate: any = new Date(cDate)
    initDate = this.datePipe.transform(initDate, 'y-MM-dd')
    days.push(initDate)
    this.trainings[initDate] = []
    while (counter > 0) {
      let myDate: any = new Date(cDate)
      myDate = myDate.setDate(myDate.getDate() + 1)
      cDate = myDate
      myDate = this.datePipe.transform(myDate, 'y-MM-dd')
      days.push(myDate)
      this.trainings[myDate] = []
      counter = counter - 1
    }
    return days
  }

  getDaysInMonth(year: number, month: number): Date[] {
    const date = new Date(year, month, 1)
    const days: any = []
    while (date.getMonth() === month) {
      let myDate: any = new Date(date)
      myDate = this.datePipe.transform(myDate, 'y-MM-dd')
      days.push(myDate)
      this.trainings[myDate] = []
      date.setDate(date.getDate() + 1)
    }
    return days
  }
}
