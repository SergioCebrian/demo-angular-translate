import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/core/services/language/language.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public currentLang;
  public today: Date = new Date();

  constructor(
    private languageService: LanguageService
  ) { 
    this.currentLang = this.languageService.checkLanguage();
  }

  ngOnInit(): void { 
    this.languageService.lang$.subscribe(val => this.currentLang = val);
  }

}
