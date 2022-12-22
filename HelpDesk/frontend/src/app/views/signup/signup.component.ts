import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/models/cadastro';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private router: Router, private signupService: SignupService) { }

  ngOnInit(): void {
    this.signupService.read().subscribe((cads) => {
      this.cads = cads;
    })
  }

  cads: Cadastro[];

  cad: Cadastro = {
    nome: '',
    telefone: '',
    email: '',
    senha: ''
  }

  nome = new FormControl(null, Validators.minLength(10));
  telefone = new FormControl(null, Validators.minLength(11))
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(5));

  passwordShow: boolean = false;
  passwordShow2: boolean = false;
  passwordType: string = 'password';
  passwordType2: string = 'password';

  createCadastro(): void {
    let senha = document.getElementById('senha2') as HTMLInputElement;
    let email = document.getElementById('email') as HTMLInputElement;

    if (!this.inputValidator()) {
      this.signupService.showMessage('Preencha todos os campos!', true);
      throw new Error('Preencha todos os campos!');
    }

    if (this.inputValidator()) {
      if (!this.validateEmail(email.value.trim())) {
        this.signupService.showMessage('Formato de e-mail inválido.', true);
        throw new Error('Formato de e-mail inválido.');
      }
      if (!this.validatePassword(this.cad.senha, senha.value.trim())) {
        this.signupService.showMessage('Senhas não conferem', true);
        throw new Error('Senhas não conferem');
      }
    }

    if (this.cads.find((cad) => cad.email == email.value.trim()) !=  undefined) {
      this.signupService.showMessage('Email cadastrado ou inválido!', true);
    } else {
      this.signupService.create(this.cad).subscribe(() => {
        this.signupService.showMessage('Cadastro realizado com sucesso!');
        this.router.navigate(['']);
      });
    }
  }

  inputValidator(): boolean {
    let senha2 = document.getElementById('senha2') as HTMLInputElement;
    if (
      this.cad.nome.trim() === '' ||
      this.cad.telefone.trim() === '' ||
      this.cad.email.trim() === '' ||
      this.cad.senha.trim() === '' ||
      senha2.value.trim() === ''
    ) {
      if (this.cad.nome.trim() === '') {
        document.getElementById('nome').classList.add('obrigatory');
      } else {
        document.getElementById('nome').classList.remove('obrigatory');
      }

      if (this.cad.telefone.trim() === '') {
        document.getElementById('telefone').classList.add('obrigatory');
      } else {
        document.getElementById('telefone').classList.remove('obrigatory');
      }

      if (this.cad.email.trim() === '') {
        document.getElementById('email').classList.add('obrigatory');
      } else {
        document.getElementById('email').classList.remove('obrigatory');
      }

      if (this.cad.senha.trim() === '') {
        document.getElementById('senha').classList.add('obrigatory');
      } else {
        document.getElementById('senha').classList.remove('obrigatory');
      }
      if (senha2.value.trim() === '') {
        document.getElementById('senha2').classList.add('obrigatory');
      } else {
        document.getElementById('senha2').classList.remove('obrigatory');
      }
      return false;
    } else {
      return true;
    }
  }

  validatePassword(senha: string, senha2: string) {
    if (senha !== senha2) {
      document.getElementById('senha2').classList.add('obrigatory');
      return false;
    } else {
      document.getElementById('senha2').classList.remove('obrigatory');
      return true;
    }
  }

  validateEmail(email: string): boolean {
    if (!this.validateEmailFormat(email)) {
      document.getElementById('email').classList.add('obrigatory');
      return false;
    }

    document.getElementById('email').classList.remove('obrigatory');
    return true;
  }

  validateEmailFormat(email: string): boolean {
    let emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!emailRegex.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  validaCampos(): boolean{
    return this.nome.valid && this.telefone.valid && this.email.valid && this.senha.valid;
  }
}
