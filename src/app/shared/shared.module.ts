import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';

// import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }/*,
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
    }*/
    })
  ],
  exports: [
    TranslateModule
    // HeaderComponent
  ]
})
export class SharedModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}