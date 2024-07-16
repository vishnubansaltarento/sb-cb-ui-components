// import { ConfigurationsService } from '@ws-widget/utils'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { NsContent } from '../services/widget-content.model'
import { map } from 'rxjs/operators'
import { ACTION_CONTENT_V3 } from '../constants/apiEndpoints'
import { WidgetContentService } from '../services/widget-content.service'
@Injectable({
  providedIn: 'root',
})
export class CommonViewerUtilService {
  API_ENDPOINTS = {
    setS3Cookie: `/apis/v8/protected/content/setCookie`,
    PROGRESS_UPDATE: `/apis/protected/v8/user/realTimeProgress/update`,
  }
  downloadRegex = new RegExp(`(/content-store/.*?)(\\\)?\\\\?['"])`, 'gm')
  authoringBase = '/apis/authContent/'
  constructor(
    private http: HttpClient,
    private contentSvc: WidgetContentService,
  ) { }

  async fetchManifestFile(url: string) {
    this.setS3Cookie(url)
    const manifestFile = await this.http
      .get<any>(url)
      .toPromise()
      .catch((_err: any) => { })
    return manifestFile
  }

  private async setS3Cookie(contentId: string) {
    await this.http
      .post(this.API_ENDPOINTS.setS3Cookie, { contentId })
      .toPromise()
      .catch((_err: any) => { })
    return
  }

  realTimeProgressUpdate(_contentId: string, _request: any) {
    // console.log('realtime', contentId, request)
    // this.http
    //   .post(`${this.API_ENDPOINTS.PROGRESS_UPDATE}/${contentId}`, request)
    //   .subscribe(noop, noop)
  }

  getContent(contentId: string): Observable<NsContent.IContent> {
    return this.http.get<NsContent.IContent>(
      `${ACTION_CONTENT_V3}read/${contentId}?mode=edit`,
      // tslint:disable-next-line:max-line-length
      // `/apis/authApi/action/content/hierarchy/${contentId}?rootOrg=${this.configservice.rootOrg || 'igot'}&org=${this.configservice.activeOrg || 'dopt'}`,
    ).pipe(map((data: any) => {
      return data && data.result && (data.result.content || {})
    }))
  }

  getAuthoringUrl(url: string): string {
    return url
      // tslint:disable-next-line:max-line-length
      ? `/apis/authContent/${url.includes('/content-store/') ? new URL(url).pathname.slice(1) : encodeURIComponent(url)}`
      : ''
  }

  regexDownloadReplace = (_str = '', group1: string, group2: string): string => {
    return `${this.authoringBase}${encodeURIComponent(group1)}${group2}`
  }

  replaceToAuthUrl(data: any): any {
    return JSON.parse(
      JSON.stringify(data).replace(
        this.downloadRegex,
        this.regexDownloadReplace,
      ),
    )
  }

  getBatchIdAndCourseId(courseId: string, batchId: string, resourceId: string) {
    const tempData = {
      courseId,
      batchId,
    }
    const tempContentData = this.contentSvc.currentMetaData
    const tempContentReadData = this.contentSvc.currentContentReadMetaData
    const enrollmentList = this.contentSvc.currentBatchEnrollmentList
    if (tempContentData && tempContentReadData && tempContentReadData.cumulativeTracking &&
      (tempContentData.primaryCategory === NsContent.EPrimaryCategory.PROGRAM ||
        tempContentData.primaryCategory === NsContent.EPrimaryCategory.CURATED_PROGRAM ||
        tempContentData.primaryCategory === NsContent.EPrimaryCategory.BLENDED_PROGRAM)
    ) {
      tempContentData.children.forEach((childList: NsContent.IContent) => {
        if (childList.primaryCategory === NsContent.EPrimaryCategory.COURSE) {
          // tslint:disable-next-line: max-line-length
          const courseEnrollmentList = enrollmentList && enrollmentList.filter((v: NsContent.ICourse) => v.contentId === childList.identifier)
          if (childList.childNodes && childList.childNodes.indexOf(resourceId) !== -1) {
            if (courseEnrollmentList && courseEnrollmentList.length > 0) {
              tempData.batchId = courseEnrollmentList[courseEnrollmentList.length - 1].batch.batchId
              tempData.courseId = childList.identifier
            }
          }
        } else if (tempContentData.primaryCategory === NsContent.EPrimaryCategory.BLENDED_PROGRAM) {
          const bPEnrollmentList = enrollmentList.filter((v: NsContent.ICourse) => v.contentId === tempContentData.identifier)
          if (tempContentData.childNodes && tempContentData.childNodes.indexOf(resourceId) !== -1) {
            if (bPEnrollmentList.length > 0) {
              tempData.batchId = bPEnrollmentList[bPEnrollmentList.length - 1].batch.batchId
              tempData.courseId = tempContentData.identifier
            }
          }
        }
      })
    }
    return tempData
  }

}
