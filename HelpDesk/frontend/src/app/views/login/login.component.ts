import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private toast: ToastrService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void { }

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(5));

  logar() {
    this.auth.authenticate(this.creds).subscribe(resposta => {
      if(this.creds.email === this.email.value.trim()){
        if(this.creds.senha === this.senha.value.trim()){
          this.auth.successfulLogin(resposta.headers.get('Authorization').substring(7));
          this.router.navigate(['']);
        }
      }
    }, () => {
      this.toast.error('Usuário e/ou Senha Inválida.');
    })
  }

  validaCampos(): boolean{
    return this.email.valid && this.senha.valid;
  }
}
