import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private api: ApiService) {
  }

  public register(request) {
  }

  public login(request) {  
    // Obtenemos el response y retornamos.
    return this.api.requestPOST('login', request);
  }

  public user(request) {
    // Obtenemo la información del usuario.
    return this.api.requestUSER('login', request);
  }

}
