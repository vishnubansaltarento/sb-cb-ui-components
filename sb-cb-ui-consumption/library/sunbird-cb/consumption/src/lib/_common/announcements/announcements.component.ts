import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sb-uic-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  @Input() objectData: any

  constructor() { }

  ngOnInit() {
  }

  viewMoreOrLess(item: any) {
    if (item.value.length > 152) {
      item.expanded = !item.expanded
    }
  }

}
