import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentLang: string;
  public languagesList: string[];

  constructor(
    private languageService: LanguageService
  ) {
    this.currentLang = this.languageService.currentLang;
    this.languagesList = this.languageService.languagesList;
  }

  useLanguage(lang: string): void {
    this.languageService.useLanguage(lang);
    this.currentLang = this.languageService.currentLang;
  }

  ngOnInit(): void { }

}
