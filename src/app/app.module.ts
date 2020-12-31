import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LanguageService } from './core/services/language/language.service';

// Se registra en el proyecto el 'locale' del idioma que se vaya a usar
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  /*
  Con añadir esa línea, todas las pipes empezarán a usar el idioma español por defecto. 
  Cambiar el locale de todas las pipes del proyecto es ahora muy sencillo, solo tenemos 
  que registrar el locale (utilizando la función registerLocaleData() como vimos antes) y 
  en el provider indicar el idioma a usar.
  */
  providers: [
    { 
      provide: LOCALE_ID,
      deps: [LanguageService], 
      useFactory: (languageService) => languageService.getLanguage() 
      // useValue: 'es' // todas las 'pipes' usan el español por defecto.
    } 
  ],
  /*
  El funcionamiento es bastante sencillo: tenemos un array de idiomas a los que la web dará soporte y 
  un idioma por defecto. Si el usuario está usando alguno de los idiomas a los que damos soporte, 
  le decimos a Angular que utilice ese locale. En caso contrario y como hicimos con ngx-translate, 
  usamos el idioma por defecto de la web.
  */
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
