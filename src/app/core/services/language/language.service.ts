import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  public languagesList = [ 'en', 'es' ];
  public languageDefault = this.languagesList[1];

  constructor(private translateService: TranslateService) { }
  
  getLanguage() {
    const userLanguage = this.translateService.getBrowserLang(); // return 'es'
    return this.languagesList.includes(userLanguage) ? userLanguage : this.languageDefault;
  }

}
