import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserLogin } from "../../models/user/userlogin";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public userLogin: UserLogin;

  constructor(private user: UserService, private router: Router) { 
    this.userLogin = new UserLogin('', '');
  }

  ngOnInit(): void {
    console.log('Component Login Ready');

    if(localStorage.getItem('token')) {
      // Redireccionar al Dashboard.
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {
    // Se envia el objeto con la información y obtenemos la respuesta.
    this.user.login(this.userLogin).subscribe( response => {
      if(response['token']) {
        localStorage.setItem('token', response['token']);

        // Asignamos un nuevo valor al Objeto para obtener la información del User.
        const get_user = this.userLogin;
        get_user['gettoken'] = true;

        this.user.user(get_user).subscribe( response_user => {
          // Guardamos la info del user en el storage.
          localStorage.setItem('user', JSON.stringify(response_user['user']));

          // Redireccionar al Dashboard.
          this.router.navigate(['/dashboard']);
        });
      }
    });
  }




}