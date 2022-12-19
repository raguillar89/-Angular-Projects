import { Fazenda } from './../../fazenda/fazenda.model';
import { GraoService } from './../grao.service';
import { Grao } from './../grao.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grao-read',
  templateUrl: './grao-read.component.html',
  styleUrls: ['./grao-read.component.scss'],
})
export class GraoReadComponent implements OnInit {
  graos: Grao[] = [];

  constructor(private router: Router, private gService: GraoService) {}

  ngOnInit(): void {
    this.gService.read().subscribe((graos) => {
      this.graos = graos;
    });
  }

  navigateToGrainCrete(): void {
    this.router.navigate(['/grao/create']);
  }
}
