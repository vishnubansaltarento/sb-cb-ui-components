import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sb-uic-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.scss']
})
export class PillsComponent implements OnInit {

  @Input() pillsData: any
  @Input() selectedValue: any
  @Input() isLoading: boolean = true
  @Output() pillClick = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  selectedPill(pillData: any) {
    this.pillClick.emit(pillData)
  }


}
