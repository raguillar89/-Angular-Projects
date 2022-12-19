import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-fazenda-crud',
  templateUrl: './fazenda-crud.component.html',
  styleUrls: ['./fazenda-crud.component.scss'],
})
export class FazendaCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Fazenda',
      routeUrl: '/fazenda',
    };
  }

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }
}
