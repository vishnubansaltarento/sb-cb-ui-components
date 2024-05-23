import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_END_POINTS = {
  PROVIDER_INSIGHTS: `/apis/proxies/v8/microsite/read/insights`,
  TRAINING_DETAILS: `apis/proxies/v8/sunbirdigot/search`
}

@Injectable({
  providedIn: 'root'
})
export class InsiteDataService {

  constructor(
    private http: HttpClient
  ) {}
  fetchSearchData(request: any): Observable<any> {
    return this.http.post<any>(API_END_POINTS.PROVIDER_INSIGHTS, request)
  }

  fetchTrainingDetails(request: any): Observable<any> {
    return this.http.post<any>(API_END_POINTS.TRAINING_DETAILS, request)
  }
}
