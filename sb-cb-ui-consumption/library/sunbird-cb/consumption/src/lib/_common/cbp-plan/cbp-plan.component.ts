import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { ScrollableItemDirective } from '../../_directives/scrollable-item/scrollable-item.directive';
import { TranslateService } from '@ngx-translate/core';
import { MultilingualTranslationsService } from '../../_services/multilingual-translations.service';

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
  currentIndex = 0
  styleData: any = {}
  contentdata: any = []

  @ViewChildren(ScrollableItemDirective) scrollableItems: QueryList<ScrollableItemDirective>
  constructor(private translate: TranslateService,
    private langtranslations: MultilingualTranslationsService) { }

  ngOnInit() {
    this.styleData = this.objectData && this.objectData.sliderData && this.objectData.sliderData.styleData
    if (this.objectData && this.objectData.list) {
      this.objectData.list.forEach((contentEle: any) => {
        let localData = {}
        localData['title'] = contentEle.title
        localData['downloaUrl'] = contentEle.downloaUrl
        localData['cardSubType'] =  "card-wide-lib"
        localData['cardCustomeClass'] = ""
        this.contentdata.push(localData)
      })
    }
  }

  getCurrentIndex(indexValue: any) {
    this.currentIndex = indexValue
  }

  getFileName(item: any) {
    console.log(item.downloadUrl)
    return item.downloadUrl.split("/").at(-1)
  }

  translateLabels(label: string, type: any) {
    return this.langtranslations.translateActualLabel(label, type, '');
  }

  downloadCBPPlan(item: any) {
    const downloadUrl = item.downloaUrl
    const xhr = new XMLHttpRequest()
    xhr.open('GET', downloadUrl, true)
    xhr.responseType = 'blob'

    xhr.onload = function() {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: 'application/pdf' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = downloadUrl.split("/").at(-1)
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      } else {
        console.error('Error downloading the PDF', xhr.statusText)
      }
    }
    xhr.onerror = function() {
      console.error('Network error')
    }
    xhr.send()
  }
}
