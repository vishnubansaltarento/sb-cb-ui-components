import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

const urls = {
  DOWNLOAD_CERTIFICATE: (id: string) => `certreg/v2/certs/download/${id}`,
  DOWNLOAD_CERTIFICATE_v2: (id: string) => `apis/protected/v8/cohorts/course/batch/cert/download/${id}`,
}

@Injectable({
  providedIn: 'root'
})


export class CertificateService {

  constructor(private http: HttpClient) { }
  downloadCertificate(id: string): Observable<any> {
    return this.http.get<any>(urls.DOWNLOAD_CERTIFICATE(id))
  }

  downloadCertificate_v2(id: string): Observable<any> {
    return this.http.get<any>(urls.DOWNLOAD_CERTIFICATE_v2(id))
  }
}
