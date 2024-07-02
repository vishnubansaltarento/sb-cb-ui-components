import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateDialogComponent } from './certificate-dialog/certificate-dialog.component';
import { MatCardModule, MatDialogModule, MatIconModule, MatMenuModule } from '@angular/material';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../content-strip-with-tabs-lib/content-strip-with-tabs-lib.module';
import { HttpClient } from '@angular/common/http';
import { PipeSafeSanitizerModule } from '@sunbird-cb/utils-v2';



@NgModule({
  declarations: [
    CertificateDialogComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    PipeSafeSanitizerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports:[
    CertificateDialogComponent
  ],
  entryComponents: [CertificateDialogComponent],
})
export class DialogComponentsModule { }
