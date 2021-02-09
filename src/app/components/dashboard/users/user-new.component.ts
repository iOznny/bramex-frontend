import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/user/userregister';
import { UserService } from 'src/app/services/user.service';

declare var UIkit: any;

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styles: [
  ]
})

export class UserNewComponent implements OnInit {

  public loading: boolean = false;
  public userRegister: UserRegister;
  public roles: any[] = [];

  constructor(private user: UserService, private router: Router) { 
    // Objeto del Usuario.
    this.userRegister = new UserRegister('','','','','','8r4m3x666', '');
  }

  ngOnInit(): void {
     // Obtenemos los roles existentes.
     this.user.roles('rol').subscribe( roles_response => this.roles = roles_response['roles']);
  }

  onSubmit() {
    this.loading = true;

    // Se envia el objeto con la información para crear el usuario.
    this.user.register(this.userRegister).subscribe( (response: any) => {
      UIkit.notification({
        message: response.message, 
        status: 'success',
        pos: 'top-center',
        timeout: 4000
      });

      setTimeout(() => {
        this.router.navigate(['/users/index']);
      }, 2000);
    }, error => {
      UIkit.notification({
        message: error.message, 
        status: 'success',
        pos: 'top-center',
        timeout: 4000
      });
    });
  }

}
