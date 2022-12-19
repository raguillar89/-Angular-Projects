import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from './components/empresa/empresa.model';
import { EmpresaService } from './components/empresa/empresa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  @Input() headerTitle: string = 'Inicio';

  empresa: Empresa;
  logged: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('login') == 'true') {
      this.logged = true;
      localStorage.setItem('status', 'logged');
      this.router.navigate(['/home']);
    } else {
      this.logged = false;
    }
  }
}
