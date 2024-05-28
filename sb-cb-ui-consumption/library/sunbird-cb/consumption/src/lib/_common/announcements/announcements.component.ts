import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sb-uic-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  @Input() objectData: any
  @Input() layoutType:  any
  @Input() mobileHeight: boolean = false
  @Output() openDialog = new EventEmitter<any>()
  isLoading: boolean = false

  constructor() { 
    this.isLoading = true
  }

  ngOnInit() {

    setTimeout(() => {
      this.isLoading = false
    }, 10000);
  }

  viewMoreOrLess(item: any) {
    if (item.value.length > 152) {
      item.expanded = !item.expanded
    }
  }

  openAnnouncements() {
    this.openDialog.emit(true)
  }

}
