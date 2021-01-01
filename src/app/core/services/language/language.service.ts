import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  private currentUrl: string;
  private getUrlLang = window.location.pathname.split('/')[1];
  private languageUse: string;
  public currentLang: string;
  public languagesList = [ 'en', 'es' ];
  public languageDefault = this.languagesList[1];

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) { 
    this.languageUse = (this.translateService.getBrowserLang() === this.getUrlLang) ? this.translateService.getBrowserLang() : this.getUrlLang;
    this.translateService.setDefaultLang('es'); // idioma a usar si no se encuentra la traducción con el idioma solicitado
    this.translateService.use(this.languageUse); // idioma a usar si no encuentra el solicitado
    
    this.currentLang = this.languageUse;
    this.currentUrl = this.router.url;
  }
  
  getLanguage() {
    const userLanguage = this.languageUse;
    return this.languagesList.includes(userLanguage) ? userLanguage : this.languageDefault;
  }

  useLanguage(lang: string): void {
    this.currentLang = lang;
    this.translateService.use(lang);
    this.refreshPage(lang);
  }

  refreshPage(lang: string): void {
    const currentUrlWithoutLang = this.router.url.split('/')[2];
    this.router.navigate([`${ lang }/${ currentUrlWithoutLang }`]);
  }

}
