import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.scss']
})
export class ChamadoCreateComponent {

  chamado: Chamado = {
    prioridade: '',
    status: '',
    titulo: '',
    descricao: '',
    tecnico: '',
    cliente: '',
  }
  
  clientes: Cliente[] = [];
  tecnicos: Tecnico[] = [];

  prioridade: FormControl = new FormControl(null, [Validators.required]);
  status: FormControl = new FormControl(null, [Validators.required]);
  titulo: FormControl = new FormControl(null, [Validators.required]);
  descricao: FormControl = new FormControl(null, [Validators.required]);
  tecnico: FormControl = new FormControl(null, [Validators.required]);
  cliente: FormControl = new FormControl(null, [Validators.required]);

  constructor(private router: Router, private clienteService: ClienteService, private tecnicoService: TecnicoService, private chamadoService: ChamadoService) {}

  ngOnInit(): void {
    this.findAllClientes();
    this.findAllTecnicos();
  }

  validaCampos(): boolean {
    return this.prioridade.valid && this.status.valid && this.titulo.valid && this.descricao.valid && this.tecnico.valid && this.cliente.valid;
  }

  findAllClientes(): void{
    this.clienteService.findAll().subscribe(resposta => {
      this.clientes = resposta;
    });
  }

  findAllTecnicos(): void{
    this.tecnicoService.findAll().subscribe(resposta => {
      this.tecnicos = resposta;
    });
  }

  create(): void {
    this.chamado.dataAbertura = new Date(Date.now()).toLocaleDateString();
    this.chamadoService.create(this.chamado).subscribe(() => {
      this.chamadoService.showMessage('Chamado Criado com Sucessso!', true);
      this.router.navigate(['*/chamados']);
    })
  }
}
