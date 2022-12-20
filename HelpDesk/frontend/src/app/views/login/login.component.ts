import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private toast: ToastrService) { }

  ngOnInit(): void { }

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(5));

  logar() {
    this.toast.error('Usuário e/ou Senha Inválidos.', 'Login')
    this.creds.email = '';
    this.creds.senha = '';
  }

  validaCampos(): boolean{
    if(this.email.valid && this.senha.valid){
      return true;
    } else {
      return false;
    }
  }
}
