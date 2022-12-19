import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  responsive: boolean = false;

  constructor() {
    /* TODO document why this constructor is empty */
  }

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }

  callSideNav(): void {
    if (this.responsive === true) {
      this.responsive = false;
    } else {
      this.responsive = true;
    }
  }

  logout() {
    localStorage.removeItem('status');
    localStorage.removeItem('login');
    localStorage.removeItem('company_name');
    location.reload();
  }
}
