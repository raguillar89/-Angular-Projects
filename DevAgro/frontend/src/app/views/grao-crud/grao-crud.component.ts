import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-grao-crud',
  templateUrl: './grao-crud.component.html',
  styleUrls: ['./grao-crud.component.scss'],
})
export class GraoCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Grão',
      routeUrl: '/grao',
    };
  }

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }
}
