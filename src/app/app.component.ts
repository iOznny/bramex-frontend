import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'bramex-frontend';
  lang;
  langs: string[] = [];

  constructor(private translate: TranslateService) {  
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
  }

  ngOnInit() {
    // Asignamos el nuevo lenguaje en el storage.
    this.lang = localStorage.getItem('lang') || 'es';
    // Asignamos el lenguaje en la propiedad lang del DOM.
    document.documentElement.lang = this.lang; 
  }

  changeLang(lang) {
    // Usamos el lenguaje.
    this.translate.use(lang);
    // Asignamos el nuevo lenguaje en el storage.
    localStorage.setItem('lang', lang);
    // Guardamos el lenguaje en la variable lang.
    this.lang = lang;
    // Asignamos el lenguaje en la propiedad lang del DOM.
    document.documentElement.lang = lang;
  }

}
