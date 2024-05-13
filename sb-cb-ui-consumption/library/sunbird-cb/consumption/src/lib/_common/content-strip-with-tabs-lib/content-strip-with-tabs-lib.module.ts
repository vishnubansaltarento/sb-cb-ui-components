import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HorizontalScrollerV2Module } from '../horizontal-scroller-v2/horizontal-scroller-v2.module';
import { WidgetResolverModule } from '@sunbird-cb/resolver';
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
import { ContentStripWithTabsLibComponent } from './content-strip-with-tabs-lib.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// tslint:disable-next-line:function-name
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [ContentStripWithTabsLibComponent],
  imports: [
    CommonModule,
    RouterModule,
    HorizontalScrollerV2Module,
    WidgetResolverModule,
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
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  entryComponents: [ContentStripWithTabsLibComponent],
  exports: [ContentStripWithTabsLibComponent],
})
export class ContentStripWithTabsLibModule { }
