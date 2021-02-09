import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private api: ApiService) {
    console.log('User Service');
    
  }

  // Obtenemos todos los usuarios de la base.
  public users(request) {
    return this.api.requestGET(request);
  }

  // Obtenemo la información del usuario.
  public user(request) {
    return this.api.requestUSER('login', request);
  }

  // Obtenemos el response y retornamos.
  public register(request) {
    return this.api.requestPOST('register', request);
  }

  // Obtenemos el response y retornamos.
  public edit(request) {
    return this.api.requestPUT('user/update', request);
  }

  // Obtenemos el response y retornamos, solamente hacemos la autenticación.
  public login(request) {  
    return this.api.requestPOST('login', request);
  }

  // Obtener los roles existentes.
  public roles(request) {
    return this.api.requestGET(request);
  }

}
