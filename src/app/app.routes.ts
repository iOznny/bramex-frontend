import { RouterModule, Routes } from '@angular/router';

/* Componentes Principales */
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { UsersComponent } from './components/dashboard/users/users.component';
import { USERS_ROUTES } from './components/dashboard/users/users.routes';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { 
        path: 'users', 
        component: UsersComponent,
        children: USERS_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);