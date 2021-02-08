import { Routes } from '@angular/router';

import { UserIndexComponent } from './user-index.component';
import { UserNewComponent } from './user-new.component';
import { UserEditComponent } from "./user-edit.component";

export const USERS_ROUTES: Routes = [
    { path: 'index', component: UserIndexComponent },
    { path: 'create', component: UserNewComponent },
    { path: 'edit', component: UserEditComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

