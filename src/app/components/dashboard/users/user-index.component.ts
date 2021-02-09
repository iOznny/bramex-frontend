import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html'
})

export class UserIndexComponent implements OnInit {

  public users: any[] = [];

  constructor(private user: UserService, private router: Router) {
    // Obtenemos los usuarios y los guardamos en el array de Users.
    this.user.users('user/index').subscribe(response => this.users = response['users']);
  }

  ngOnInit(): void {
  }

  // Editar usuario.
  editUser(id: number) {
    this.router.navigate(['users/edit/', id]);
  }

  // Eliminar usuario.
  removeUser(id: number) {
    //this.router.navigate(['users/delete/', id]);
  }
  
}
