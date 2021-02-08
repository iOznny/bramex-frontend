import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html'
})

export class NavbarAdminComponent implements OnInit {

  public user: any;
  currentDate: number = Date.now();

  constructor() { 
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
  }

}
