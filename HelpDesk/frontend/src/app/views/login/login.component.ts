import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/models/cadastro';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private router: Router, private signupService: SignupService) { }

  ngOnInit(): void { }

  cads: Cadastro[];

  cad: Cadastro = {
    nome: '',
    telefone: '',
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(5));

  logar() {
    let email = document.getElementById('email') as HTMLInputElement;
    let password = document.getElementById('senha') as HTMLInputElement;
    this.signupService.read().subscribe((cads) => {
      if (cads.find((e) => e.email == email.value.trim())) {
        this.cad = cads.find((e) => e.email === email.value.trim());
        if (this.cad.senha === password.value.trim()) {
          this.router.navigate(['/*']);
          localStorage.setItem('status', 'logged');
          localStorage.setItem('nome', this.cad.nome);
        } else {
          this.signupService.showMessage('ERROR: Senha incorreta!', true);
        }
      } else {
        this.signupService.showMessage('ERROR: Email não cadastrado!', true);
      }
    });
  }

  validaCampos(): boolean{
    return this.email.valid && this.senha.valid;
  }
}
