import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentLang: string;

  constructor(
    private languageService: LanguageService
  ) {
    this.currentLang = this.languageService.currentLang;
  }

  useLanguage(lang: string): void {
    return this.languageService.useLanguage(lang);
  }

  ngOnInit(): void { }

}
