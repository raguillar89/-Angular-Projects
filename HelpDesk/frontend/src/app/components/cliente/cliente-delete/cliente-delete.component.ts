import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.scss']
})
export class ClienteDeleteComponent {

  cliente: Cliente = {
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.clienteService.findById(this.cliente.id).subscribe(resposta => {
      resposta.perfis = [];
      this.cliente = resposta;
    });
  }

  delete(): void {
    this.clienteService.delete(this.cliente.id).subscribe(() => {
      this.clienteService.showMessage('Cliente Deletado com Sucesso!', true);
      this.router.navigate(['*/clientes']);
    })
  }
}
