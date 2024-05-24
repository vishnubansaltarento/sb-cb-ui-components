import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sb-uic-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  @Input() objectData: any
  @Input() layoutType:  any
  @Output() openDialog = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
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
