import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

/* Forms */
import { FormsModule } from "@angular/forms";

/* Translate Idioms */
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/* Routes */
import { APP_ROUTING } from "./app.routes";

/* Componentes Principales */
import { HomeComponent } from './components/home/home.component';
import { NavbarAdminComponent } from './shared/navbar-admin/navbar-admin.component';

import { LoginComponent } from './components/login/login.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { UsersComponent } from './components/dashboard/users/users.component';
import { UserNewComponent } from './components/dashboard/users/user-new.component';
import { UserEditComponent } from './components/dashboard/users/user-edit.component';
import { UserIndexComponent } from './components/dashboard/users/user-index.component';

/* Lenguaje */
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    NavbarAdminComponent,
    UsersComponent,
    UserNewComponent,
    UserEditComponent,
    UserIndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
