import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs'
import { catchError, map, retry } from 'rxjs/operators'
import { NsContent } from './widget-content.model'

// TODO: move this in some common place
const PROTECTED_SLAG_V8 = '/apis/protected/v8'
const PROXY_SLAG_V8 = '/apis/proxies/v8'
const ACTION_CONTENT_V3 = '/action/content/v3/'

const API_END_POINTS = {
  CONTENT: `${PROTECTED_SLAG_V8}/content`,
  READ: (doId: string) => `${PROXY_SLAG_V8}/${ACTION_CONTENT_V3}read/${doId}`,
  AUTHORING_CONTENT: (doId: string) => `${PROXY_SLAG_V8}/${ACTION_CONTENT_V3}read/${doId}?mode=edit`,
  AUTHORING_CONTENT_HIERARCHY: (doId: string) => `${PROXY_SLAG_V8}/${ACTION_CONTENT_V3}hierarchy/${doId}?mode=edit`,
  AUTHORING_CONTENT_HIERARCHY_WITHOUT_EDIT: (doId: string) => `${PROXY_SLAG_V8}/${ACTION_CONTENT_V3}hierarchy/${doId}`,
  CONTENT_LIKES: `${PROTECTED_SLAG_V8}/content/likeCount`,
  SET_S3_COOKIE: `${PROTECTED_SLAG_V8}/content/setCookie`,
  SET_S3_IMAGE_COOKIE: `${PROTECTED_SLAG_V8}/content/setImageCookie`,
  FETCH_MANIFEST: `${PROTECTED_SLAG_V8}/content/getWebModuleManifest`,
  FETCH_WEB_MODULE_FILES: `${PROTECTED_SLAG_V8}/content/getWebModuleFiles`,
  MULTIPLE_CONTENT: `${PROTECTED_SLAG_V8}/content/multiple`,
  CONTENT_SEARCH_V5: `${PROTECTED_SLAG_V8}/content/searchV5`,
  CONTENT_SEARCH_V6: `${PROTECTED_SLAG_V8}/content/searchV6`,
  CONTENT_SEARCH_REGION_RECOMMENDATION: `${PROTECTED_SLAG_V8}/content/searchRegionRecommendation`,
  CONTENT_HISTORY: `${PROTECTED_SLAG_V8}/user/history`,
  USER_CONTINUE_LEARNING: `${PROTECTED_SLAG_V8}/user/history/continue`,
  // not in use
  CONTENT_RATING: `${PROTECTED_SLAG_V8}/user/rating`,
  CONTENT_RATING_V2: `${PROTECTED_SLAG_V8}/user/rating/content/average-ratingInfo`,
  // not in use
  COLLECTION_HIERARCHY: (type: string, id: string) =>
    `${PROTECTED_SLAG_V8}/content/collection/${type}/${id}`,
  REGISTRATION_STATUS: `${PROTECTED_SLAG_V8}/admin/userRegistration/checkUserRegistrationContent`,
  MARK_AS_COMPLETE_META: (contentId: string) => `${PROTECTED_SLAG_V8}/user/progress/${contentId}`,
  PROXY_CONTENT: `${PROXY_SLAG_V8}${ACTION_CONTENT_V3}`,
  ACTIVE_LEARNERS: (batchId: string) => `${PROTECTED_SLAG_V8}/cohorts/course/getUsersForBatch/${batchId}`,
  BLENDED_REQUESTS: `${PROXY_SLAG_V8}/workflow/blendedprogram/search`,
  BLEMDED_SEARCH_REQUEST: `${PROXY_SLAG_V8}/workflow/blendedprogram/searchV2/pc`,
  UPDATE_BLENDED_REQUEST: `${PROXY_SLAG_V8}/workflow/blendedprogram/update/pc`,
  REMOVE_BLENDED_REQUEST: `${PROXY_SLAG_V8}/workflow/blendedprogram/remove/pc`,
  GET_RATING: (contentId: string, contentType: string, userId: string) =>
    `${PROXY_SLAG_V8}/ratings/v1/read/${contentId}/${contentType}/${userId}`,
  // ADD_OR_UPDATE: `${PROXY_SLAG_V8}/ratings/v1/upsert`,
  GET_RATING_SUMMARY: (contentId: string, contentType: string) =>
    `${PROXY_SLAG_V8}/ratings/v1/summary/${contentId}/${contentType}`,
  GET_RATING_LOOKUP: `${PROXY_SLAG_V8}/ratings/v1/ratingLookUp`,
  DOWNLOAD_SESSION_QR_CODES: (courseId: string, batchId: string) => `${PROXY_SLAG_V8}/batchsesion/qrcode/${courseId}/${batchId}`,
  MARK_ATTENDENCE: `${PROXY_SLAG_V8}/blendedprogram/v1/update/progress`,
  ATTENDANCE_PROGRESS: `${PROXY_SLAG_V8}/blendedprogram/v1/getUserContentProgress`,
  ACTIVE_LEARNERS_LIST: `${PROXY_SLAG_V8}/course/v1/batch/getParticipants`,
}

@Injectable({
  providedIn: 'root',
})
export class WidgetContentService {
  private updateBatchData = new BehaviorSubject(false)
  updateBatchDataObservable = this.updateBatchData.asObservable()
  currentMetaData!: NsContent.IContent
  currentContentReadMetaData!: NsContent.IContent
  currentBatchEnrollmentList!: NsContent.ICourse[]

  constructor(
    private http: HttpClient
  ) { }

  changeBatchData(state: boolean) {
    this.updateBatchData.next(state)
  }

  fetchMarkAsCompleteMeta(identifier: string): Promise<any> {
    const url = API_END_POINTS.MARK_AS_COMPLETE_META(identifier)
    return this.http.get(url).toPromise()
  }

  // fetchContent(
  //   contentId: string,
  //   hierarchyType: 'all' | 'minimal' | 'detail' = 'detail',
  //   additionalFields: string[] = [],
  // ): Observable<NsContent.IContent> {
  //   const url = `${API_END_POINTS.CONTENT}/${contentId}?hierarchyType=${hierarchyType}`
  //   return this.http
  //     .post<NsContent.IContent>(url, { additionalFields })
  //     .pipe(retry(1))
  // }

  fetchContent(
    contentId: string,
    _hierarchyType: 'all' | 'minimal' | 'detail' = 'detail',
    _additionalFields: string[] = [],
  ): Observable<NsContent.IContent> {
    const url = `${API_END_POINTS.AUTHORING_CONTENT(contentId)}`
    return this.http
      .get<NsContent.IContent>(url)
      .pipe(
        map((data: any) => {
          return data.result.content
        }),
        retry(1))
  }

  /*fetchAuthoringContent(contentId: string): Observable<NsContent.IContent> {
    const url = `${API_END_POINTS.PROXY_CONTENT}/hierarchy/${contentId}?mode=edit`
    return this.http.get<NsContent.IContent>(url).pipe(
      map((data: any) => {
        return data.result.content
      }),
      retry(1))
  } */

  fetchAuthoringContent(contentId: string): Observable<NsContent.IContent> {
    const url = `${API_END_POINTS.PROXY_CONTENT}hierarchy/${contentId}?mode=edit`
    return this.http.get<NsContent.IContent>(url).pipe(
      map((data: any) => {
        return data.result.content
      }),
      retry(1))
  }
  fetchAuthoringContentForLive(contentId: string): Observable<NsContent.IContent> {
    const url = `${API_END_POINTS.PROXY_CONTENT}hierarchy/${contentId}`
    return this.http.get<NsContent.IContent>(url).pipe(
      map((data: any) => {
        return data.result.content
      }),
      retry(1))
  }
  fetchAuthoringContentForLive2(contentId: string): Observable<NsContent.IContent> {
    const url = `${API_END_POINTS.PROXY_CONTENT}read/${contentId}`
    return this.http.get<NsContent.IContent>(url).pipe(
      map((data: any) => {
        return data.result.content
      }),
      retry(1))
  }
  fetchLearners(batchId: string): Observable<any[]> {
    const url = `${API_END_POINTS.ACTIVE_LEARNERS(batchId)}`
    return this.http.get<any[]>(url).pipe(retry(1))
  }

  fetchLearnersList(batchID: string, pageLimit: number = 10, offsetNum: number = 0): Observable<any> {
    const reqBody = {
      request: {
        filters: {
          active: true,
          batchId: batchID,
          limit: pageLimit,
          currentOffSet: offsetNum,
        },
      },
    }
    return this.http.post<any>(API_END_POINTS.ACTIVE_LEARNERS_LIST, reqBody).pipe(retry(1))
  }

  fetchProgress(req: any): Observable<any[]> {
    return this.http.post<any>(`${API_END_POINTS.ATTENDANCE_PROGRESS}`, req)
  }

  downloadQRCode(courseId: string, batchId: string) {
    const url = `${API_END_POINTS.DOWNLOAD_SESSION_QR_CODES(courseId, batchId)}`
    return this.http.get(url, { responseType: 'blob' })
  }

  fetchBlendedRequests(req: any): Observable<any[]> {
    return this.http.post<any>(API_END_POINTS.BLENDED_REQUESTS, req)
  }

  fetchBlendedSearchList(req: any): Observable<any[]> {
    return this.http.post<any>(API_END_POINTS.BLEMDED_SEARCH_REQUEST, req)
  }

  updateBlendedRequests(req: any) {
    return this.http.post<any>(`${API_END_POINTS.UPDATE_BLENDED_REQUEST}`, req)
  }

  removeLearner(req: any) {
    return this.http.post<any>(`${API_END_POINTS.REMOVE_BLENDED_REQUEST}`, req)
  }
  fetchContentData(identifier: string): Observable<NsContent.IContent> {
    const url = `${API_END_POINTS.AUTHORING_CONTENT(identifier)}`
    return this.http.get<NsContent.IContent>(url).pipe(
      map((data: NsContent.IContent) => {
        return data.result.content
      }),
      retry(1))
  }
  fetchAuthoringContentHierarchy(contentId: string): Observable<NsContent.IContent> {
    const url = `${API_END_POINTS.AUTHORING_CONTENT_HIERARCHY(contentId)}`
    return this.http.get<NsContent.IContent>(url).pipe(retry(1))
  }
  fetchAuthoringContentHierarchyWithoutEdit(contentId: string): Observable<NsContent.IContent> {
    const url = `${API_END_POINTS.AUTHORING_CONTENT_HIERARCHY_WITHOUT_EDIT(contentId)}`
    return this.http.get<NsContent.IContent>(url).pipe(retry(1))
  }
  fetchMultipleContent(ids: string[]): Observable<NsContent.IContent[]> {
    return this.http.get<NsContent.IContent[]>(
      `${API_END_POINTS.MULTIPLE_CONTENT}/${ids.join(',')}`,
    )
  }
  fetchCollectionHierarchy(type: string, id: string, pageNumber: number = 0, pageSize: number = 1) {
    return this.http.get<NsContent.ICollectionHierarchyResponse>(
      `${API_END_POINTS.COLLECTION_HIERARCHY(
        type,
        id,
      )}?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    )
  }

  fetchContentLikes(contentIds: { content_id: string[] }) {
    return this.http
      .post<{ [identifier: string]: number }>(API_END_POINTS.CONTENT_LIKES, contentIds)
      .toPromise()
  }
  // fetchContentRatings(contentIds: { contentIds: string[] }) {
  //   return this.http
  //     .post(`${API_END_POINTS.CONTENT_RATING}/rating`, contentIds)
  //     .toPromise()
  // }
  // fetchContentRatingsV2(contentId: string) {
  //   return this.http
  //     .get<IContentRating>(`${API_END_POINTS.CONTENT_RATING_V2}/${contentId}`)
  // }
  getRating(contentId: string, contentType: string, userId: string): Observable<any> {
    return this.http.get<any>(
      API_END_POINTS.GET_RATING(contentId, contentType, userId)
    )
  }
  getRatingSummary(contentId: string, contentType: string): Observable<any> {
    return this.http.get<any>(
      API_END_POINTS.GET_RATING_SUMMARY(contentId, contentType)
    )
  }
  getRatingLookup(req: NsContent.ILookupRequest): Observable<any> {
    return this.http.post<any>(
      API_END_POINTS.GET_RATING_LOOKUP, req
    )
  }
  fetchContentHistory(_contentId: string): Observable<NsContent.IContinueLearningData> {
    return EMPTY
    // return this.http.get<NsContent.IContinueLearningData>(
    //   `${API_END_POINTS.CONTENT_HISTORY}/${contentId}`,
    // )
  }

  async continueLearning(id: string, collectionId?: string, collectionType?: string): Promise<any> {
    return new Promise(async resolve => {
      if (collectionType &&
        collectionType.toLowerCase() === 'playlist') {
        const reqBody = {
          contextPathId: collectionId ? collectionId : id,
          resourceId: id,
          data: JSON.stringify({
            timestamp: Date.now(),
            contextFullPath: [collectionId, id],
          }),
          dateAccessed: Date.now(),
          contextType: 'playlist',
        }
        await this.saveContinueLearning(reqBody).toPromise().catch().finally(() => {
          resolve(true)
        })
      } else {
        const reqBody = {
          contextPathId: collectionId ? collectionId : id,
          resourceId: id,
          data: JSON.stringify({ timestamp: Date.now() }),
          dateAccessed: Date.now(),
        }
        await this.saveContinueLearning(reqBody).toPromise().catch().finally(() => {
          resolve(true)
        })
      }
    })
  }
  saveContinueLearning(_content: NsContent.IViewerContinueLearningRequest): Observable<any> {
    // const url = API_END_POINTS.USER_CONTINUE_LEARNING
    return EMPTY
  }

  setS3Cookie(
    contentId: string,
    // _path: string,
  ): Observable<any> {
    return this.http
      .post(API_END_POINTS.SET_S3_COOKIE, { contentId })
      .pipe(catchError(_err => of(true)))
  }

  // setS3ImageCookie(): Observable<any> {
  //   return this.http.post(API_END_POINTS.SET_S3_IMAGE_COOKIE, {}).pipe(catchError(_err => of(true)))
  // }

  fetchManifest(url: string): Observable<any> {
    return this.http.post(API_END_POINTS.FETCH_MANIFEST, { url })
  }
  fetchWebModuleContent(url: string): Observable<any> {
    return this.http.get(`${API_END_POINTS.FETCH_WEB_MODULE_FILES}?url=${encodeURIComponent(url)}`)
  }

  fetchContentRating(contentId: string): Observable<{ rating: number }> {
    return this.http.get<{ rating: number }>(`${API_END_POINTS.CONTENT_RATING}/${contentId}`)
  }
  deleteContentRating(contentId: string): Observable<any> {
    return this.http.delete(`${API_END_POINTS.CONTENT_RATING}/${contentId}`)
  }
  addContentRating(contentId: string, data: { rating: number }): Observable<any> {
    return this.http.post<any>(`${API_END_POINTS.CONTENT_RATING}/${contentId}`, data)
  }

  async getFirstChildInHierarchy(content: NsContent.IContent): Promise<NsContent.IContent> {
    if (!(content.children || []).length) {
      return content
    }
    if (
      (content.primaryCategory === NsContent.EPrimaryCategory.PROGRAM ||
        content.primaryCategory === NsContent.EPrimaryCategory.CURATED_PROGRAM)
    ) {
      if (content.children && content.children.length > 0 &&
        content.children[0].primaryCategory === NsContent.EPrimaryCategory.COURSE) {
        const resData =
          await this.fetchAuthoringContentHierarchyWithoutEdit(content.children[0].identifier).toPromise().catch(_error => { })
        if (resData && resData.params && resData.params.status && resData.params.status === 'successful') {
          return this.getFirstChildInHierarchy(resData.result.content)
        }
      }
      return this.getFirstChildInHierarchy(content.children[0])
    }
    if (
      content.primaryCategory === NsContent.EPrimaryCategory.RESOURCE ||
      content.primaryCategory === NsContent.EPrimaryCategory.ASSESSMENT ||
      content.primaryCategory === NsContent.EPrimaryCategory.FINALASSESSMENT
    ) {
      return content
    }
    const firstChild = content.children[0]
    const resultContent = this.getFirstChildInHierarchy(firstChild)
    return resultContent
  }

  getRegistrationStatus(source: string): Promise<{ hasAccess: boolean; registrationUrl?: string }> {
    return this.http.get<any>(`${API_END_POINTS.REGISTRATION_STATUS}/${source}`).toPromise()
  }

  fetchConfig(url: string) {
    return this.http.get<any>(url)
  }
  getRatingIcon(ratingIndex: number, avg: number): 'star' | 'star_border' | 'star_half' {
    if (avg) {
      const avgRating = avg
      const ratingFloor = Math.floor(avgRating)
      // const difference =  avgRating - ratingIndex
      if (ratingIndex <= ratingFloor) {
        return 'star'
      }
      if (ratingFloor === ratingIndex - 1 && avgRating % 1 >= 0.29 && avgRating % 1 < 0.71) {
        return 'star_half'
      }
    }
    return 'star'
  }

  getRatingIconClass(ratingIndex: number, avg: number): boolean {
    if (avg) {
      const avgRating = avg
      const ratingFloor = Math.floor(avgRating)
      if (ratingIndex <= ratingFloor) {
        return true
      }
      if (ratingFloor === ratingIndex - 1 && avgRating % 1 >= 0.29 && avgRating % 1 < 0.71) {
        return true
      }
      if (ratingFloor === ratingIndex - 1 && avgRating % 1 > 0.71) {
        return true
      }
      if (ratingFloor === ratingIndex - 1 && avgRating % 1 < 0.29) {
        return false
      }
    }
    return false
  }

  markAttendence(req: any) {
    return this.http.post<any>(`${API_END_POINTS.MARK_ATTENDENCE}`, req)
  }
}
