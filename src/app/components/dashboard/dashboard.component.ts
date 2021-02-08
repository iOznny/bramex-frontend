import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  public user: any;
  currentDate: number = Date.now();
  
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
  }

}
