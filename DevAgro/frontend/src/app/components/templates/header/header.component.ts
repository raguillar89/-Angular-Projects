import { Component, Input, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() nomeEmpresa: string = localStorage.getItem('company_name');

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }
}
