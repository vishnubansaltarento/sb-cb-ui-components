import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HorizontalScrollerV2Module } from '../../horizontal-scroller-v2/horizontal-scroller-v2.module';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule,
  MatExpansionModule,
  MatRadioModule,
  MatChipsModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatAutocompleteModule} from '@angular/material';
import { ContentStripWithTabsPillsComponent } from './content-strip-with-tabs-pills.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SbUiResolverModule } from '@sunbird-cb/resolver-v2';

// tslint:disable-next-line:function-name
export function HttpLoaderFactory1(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [ContentStripWithTabsPillsComponent],
  imports: [
    SbUiResolverModule,
    CommonModule,
    RouterModule,
    HorizontalScrollerV2Module,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatAutocompleteModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory1,
        deps: [HttpClient],
      },
    }),
  ],
  entryComponents: [ContentStripWithTabsPillsComponent],
  exports: [ContentStripWithTabsPillsComponent],
})
export class ContentStripWithTabsPillsModule { }
