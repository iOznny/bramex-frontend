import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  /* Constante de Ruta del Backend */
  protected url: string = "https://cy-tics.com/bramexbackend/api/";

  // Token
  protected token: string;

  constructor(private http: HttpClient) { 
  }

  /* Obtenemos la autorización del logeo. */
  requestToken(request: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': this.token
    });

    return this.http.get(this.url + request, { headers });
  }

  requestGET(request: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    });

    return this.http.get(this.url + request, { headers });
  }

  requestPOST(request: string, body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    });

    return this.http.post(this.url + request, body, { headers });
  }

  requestPUT(request: string, body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': localStorage.getItem('token')
    });

    return this.http.put(this.url + request, body, { headers });
  }

  requestDELETE(request: string, body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': localStorage.getItem('token')
    });

    return this.http.put(this.url + request, body, { headers });
  }

  requestUSER(request: string, body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    });

    return this.http.post(this.url + request, body, { headers });
  }


}
