import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/components/empresa/empresa.model';
import { EmpresaService } from 'src/app/components/empresa/empresa.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent implements OnInit {
  passwordType: string = 'password';
  passwordShow: boolean = false;

  empresa: Empresa;

  constructor(private empresaService: EmpresaService, private router: Router) {}

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }

  togglePassword() {
    if (this.passwordShow) {
      this.passwordShow = false;
      this.passwordType = 'password';
    } else {
      this.passwordShow = true;
      this.passwordType = 'text';
    }
  }

  login() {
    let email = document.getElementById('email') as HTMLInputElement;
    let password = document.getElementById('senha') as HTMLInputElement;
    this.empresaService.read().subscribe((empresas) => {
      if (empresas.find((e) => e.email == email.value.trim())) {
        this.empresa = empresas.find((e) => e.email === email.value.trim());
        if (this.empresa.senha === password.value.trim()) {
          this.router.navigate(['/home']);
          localStorage.setItem('status', 'logged');
          localStorage.setItem('company_name', this.empresa.nome);
          location.reload();
        } else {
          this.empresaService.showMessage('ERROR: Senha incorreta!', true);
        }
      } else {
        this.empresaService.showMessage('ERROR: Email não cadastrado!', true);
      }
    });
  }
}
