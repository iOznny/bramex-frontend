import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserEdit } from 'src/app/models/user/useredit';
import { UserService } from 'src/app/services/user.service';

declare var UIkit: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [
  ]
})

export class UserEditComponent implements OnInit {

  public loading: boolean = false;
  public userEdit: UserEdit;
  public userData: any;
  public id_user: number;

  constructor(private user: UserService, private route: ActivatedRoute, private router: Router) { 
    // Objeto del Usuario.
    this.userEdit = new UserEdit('','','','','','','8r4m3x666');

    // Obtenemos el id de la ruta.
    this.route.params.subscribe( params => {
      this.id_user = params['id'];
    });

    // Obtenemos los usuarios y los guardamos en el array de userData.
    this.user.users('user/index').subscribe(response => {
      for(let i=0; i<response['users'].length; i++) {
        // Iteramos la respuesta para buscar el usuario.
        if(response['users'][i].id == this.id_user) {
          localStorage.setItem('edit-user', JSON.stringify(response['users'][i]));
        }
      }
    });

    // Metemos los datos del Usuario al Storage.
    this.userData = JSON.parse(localStorage.getItem('edit-user'));

  }

  ngOnInit(): void {
  }

  // Enviamos la data del usuario hacia la api de editar.
  onSubmit() {
    this.loading = true;

    // Obtenemos los datos del Usuario al Storage.
    let data_user: string;
    data_user = JSON.parse(localStorage.getItem('edit-user'));

    this.userEdit.id = data_user['id'];

    // Se envia el objeto con la información para editar el usuario.
    this.user.edit(this.userEdit).subscribe( (response: any) => {
      UIkit.notification({
        message: response.message, 
        status: 'success',
        pos: 'top-center',
        timeout: 4000
      });

      setTimeout(() => {
        this.router.navigate(['/users/index']);
      }, 2000);

      localStorage.removeItem('edit-user')
    }, error => {
      UIkit.notification({
        message: error.message, 
        status: 'danger',
        pos: 'top-center',
        timeout: 4000
      });
    });
    
  }
  
}