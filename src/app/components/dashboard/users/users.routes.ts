import { Routes } from '@angular/router';

import { UserIndexComponent } from './user-index.component';
import { UserNewComponent } from './user-new.component';
import { UserEditComponent } from "./user-edit.component";
import { UserDeleteComponent } from './user-delete.component';

export const USERS_ROUTES: Routes = [
    { path: 'index', component: UserIndexComponent },
    { path: 'create', component: UserNewComponent },
    { path: 'edit/:id', component: UserEditComponent },
    { path: 'delete/:id', component: UserDeleteComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

