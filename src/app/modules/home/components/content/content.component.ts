import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language/language.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public currentLang: string;
  public today: Date = new Date();

  constructor(
    private languageService: LanguageService
  ) { 
    this.currentLang = this.languageService.currentLang;
  }

  ngOnInit(): void {
  }

}
