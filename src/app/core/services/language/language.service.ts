import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  public languagesList = [ 'en', 'es' ];
  public languageDefault = this.languagesList[1];

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) { 
    this.translateService.setDefaultLang('es'); // idioma a usar si no se encuentra la traducción con el idioma solicitado
    this.translateService.use(this.checkLanguage()); // idioma a usar si no encuentra el solicitado
  }

  checkLanguage() {
    const getUrlLang = window.location.pathname.split('/')[1];
    return (this.translateService.getBrowserLang() === getUrlLang) ? this.translateService.getBrowserLang() : getUrlLang;
  }
  
  getLanguage() {
    const userLanguage = this.checkLanguage();
    return this.languagesList.includes(userLanguage) ? userLanguage : this.languageDefault;
  }

  setLanguage(lang: string): void {
    this.translateService.use(lang);
    this.refreshPage(lang);
  }

  refreshPage(lang: string): void {
    const currentUrlWithoutLang = this.router.url.split('/')[2];
    this.router.navigate([`${ lang }/${ currentUrlWithoutLang }`]);
  }

}
