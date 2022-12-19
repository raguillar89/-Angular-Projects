import { Router } from '@angular/router';
import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa.model';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.scss'],
})
export class EmpresaCreateComponent implements OnInit {
  passwordShow: boolean = false;
  passwordShow2: boolean = false;
  passwordType: string = 'password';
  passwordType2: string = 'password';

  empresas: Empresa[];

  empresa: Empresa = {
    nome: '',
    email: '',
    cnpj: '',
    endereco: '',
    senha: '',
  };

  constructor(private empresaService: EmpresaService, private router: Router) {}

  ngOnInit(): void {
    this.empresaService.read().subscribe((empresas) => {
      this.empresas = empresas;
    });
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

  toggleRetypePassword() {
    if (this.passwordShow2) {
      this.passwordShow2 = false;
      this.passwordType2 = 'password';
    } else {
      this.passwordShow2 = true;
      this.passwordType2 = 'text';
    }
  }

  createEmpresa(): void {
    let senha = document.getElementById('senha2') as HTMLInputElement;
    let email = document.getElementById('email') as HTMLInputElement;
    let cnpj = document.getElementById('cnpj') as HTMLInputElement;

    if (!this.inputValidator()) {
      this.empresaService.showMessage('Preencha todos os campos!', true);
      throw new Error('Preencha todos os campos!');
    }

    if (this.inputValidator()) {
      if (!this.validateCnpj(cnpj.value.trim())) {
        this.empresaService.showMessage('Formato de CNPJ inválido', true);
        throw new Error('Formato de CNPJ inválido');
      }

      if (!this.validateEmail(email.value.trim())) {
        this.empresaService.showMessage('Formato de e-mail inválido.', true);
        throw new Error('Formato de e-mail inválido.');
      }
      if (!this.validatePassword(this.empresa.senha, senha.value.trim())) {
        this.empresaService.showMessage('Senhas não conferem', true);
        throw new Error('Senhas não conferem');
      }
    }

    if (
      this.empresas.find((empresa) => empresa.email == email.value.trim()) !=
      undefined
    ) {
      this.empresaService.showMessage('Email cadastrado ou inválido!', true);
    } else {
      this.empresaService.create(this.empresa).subscribe(() => {
        this.empresaService.showMessage('Empresa cadastrada com sucesso!');
        this.router.navigate(['/']);
      });
    }
  }

  navigateToLogiIn(): void {
    this.router.navigate(['/']);
  }

  inputValidator(): boolean {
    let senha2 = document.getElementById('senha2') as HTMLInputElement;
    if (
      this.empresa.nome.trim() === '' ||
      this.empresa.email.trim() === '' ||
      this.empresa.cnpj.trim() === '' ||
      this.empresa.endereco.trim() === '' ||
      this.empresa.senha.trim() === '' ||
      senha2.value.trim() === ''
    ) {
      if (this.empresa.nome.trim() === '') {
        document.getElementById('nome').classList.add('obrigatory');
      } else {
        document.getElementById('nome').classList.remove('obrigatory');
      }

      if (this.empresa.email.trim() === '') {
        document.getElementById('email').classList.add('obrigatory');
      } else {
        document.getElementById('email').classList.remove('obrigatory');
      }

      if (this.empresa.cnpj.trim() === '') {
        document.getElementById('cnpj').classList.add('obrigatory');
      } else {
        document.getElementById('cnpj').classList.remove('obrigatory');
      }

      if (this.empresa.endereco.trim() === '') {
        document.getElementById('endereco').classList.add('obrigatory');
      } else {
        document.getElementById('endereco').classList.remove('obrigatory');
      }

      if (this.empresa.senha.trim() === '') {
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

  validateCnpj(cnpj: string): boolean {
    var cnpjRegex = /^\d{14}$/;
    if (!cnpjRegex.test(cnpj)) {
      return false;
    }
    return true;
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
    var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!emailRegex.test(email)) {
      return false;
    } else {
      return true;
    }
  }
}
