import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private router: Router, private signupService: SignupService){ }

  ngOnInit(): void {
    this.router.navigate(['chamados/read/1'])
  }

  logout() {    
    localStorage.removeItem('status');
    localStorage.removeItem('login');
    localStorage.removeItem('nome');
    this.signupService.showMessage('Logout realizado com sucesso!', true);
    this.router.navigate(['login']);
  }
}
