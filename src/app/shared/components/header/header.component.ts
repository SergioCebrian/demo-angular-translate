import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('es'); // idioma a usar si no se encuentra la traducción con el idioma solicitado
    this.translateService.use('es'); // idioma a usar si no encuentra el solicitado
    
    this.translateService.get('demo.hello').subscribe((translate: string) => {
      console.log(translate); // print 'Hola mundo'
    }); 
  }

  useLanguage(lang: string): void {
    this.translateService.use(lang);
  }

  ngOnInit(): void {
  }

}
