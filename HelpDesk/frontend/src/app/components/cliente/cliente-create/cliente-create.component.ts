import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
}

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(5));

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void { }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid;
  }

  create(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente Cadastrado com Sucesso!', true);
      this.router.navigate(['*/clientes']);
    })
  }

  addPerfil(perfil: any): void {
    if(this.cliente.perfis.includes(perfil)) {
      this.cliente.perfis.splice(this.cliente.perfis.indexOf(perfil), 1);
    } else {
      this.cliente.perfis.push(perfil);
    }
  }
}
