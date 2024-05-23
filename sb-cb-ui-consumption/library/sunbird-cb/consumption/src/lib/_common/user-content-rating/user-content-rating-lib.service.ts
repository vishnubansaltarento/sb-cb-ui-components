import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_END_POINTS = {
  TOP_REVIEWS: `/apis/proxies/v8/ratings/v1/topReviews`
}
@Injectable({
  providedIn: 'root'
})
export class UserContentRatingLibService {

  constructor(private http: HttpClient) { }
  fetchTopReviews(doId: any): Observable<any> {
    return this.http.get<any>(`${API_END_POINTS.TOP_REVIEWS}/${doId}`)
  }
}
