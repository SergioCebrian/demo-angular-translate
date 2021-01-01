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

  constructor(private languageService: LanguageService) {
    this.languagesList = this.languageService.languagesList;
  }

  setLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
  }

  ngOnInit(): void { 
    this.languageService.lang$.subscribe(val => this.currentLang = val);
  }

}
