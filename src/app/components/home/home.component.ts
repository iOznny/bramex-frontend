import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  
  public lang;
  public langs: string[] = [];
  public dashboard: boolean = false;

  constructor(private translate: TranslateService) { 
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
  }

  ngOnInit(): void {
    // Asignamos el nuevo lenguaje en el storage.
    this.lang = localStorage.getItem('lang') || 'es';
    // Asignamos el lenguaje en la propiedad lang del DOM.
    document.documentElement.lang = this.lang;

    if(localStorage.getItem('token')) {
      // Redireccionar al Dashboard.
      this.dashboard = true;
    }
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
