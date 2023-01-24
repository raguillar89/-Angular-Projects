import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.scss']
})
export class ChamadoUpdateComponent implements OnInit {

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

  constructor(private router: Router, private clienteService: ClienteService, private tecnicoService: TecnicoService, private chamadoService: ChamadoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllClientes();
    this.findAllTecnicos();
  }

  validaCampos(): boolean {
    return this.prioridade.valid && this.status.valid && this.titulo.valid && this.descricao.valid && this.tecnico.valid && this.cliente.valid;
  }
  
  retornaStatus(status: any): string {
    if(status == '0') {
      return 'Aberto';
    } else if (status == '1'){
      return 'Em Andamento';
    } else {
      return 'Encerrado';
    }
  }

  retornaPropridade(prioridade: any): string {
    if(prioridade == '0') {
      return 'Baixa';
    } else if (prioridade == '1'){
      return 'Média';
    } else {
      return 'Alta';
    }
  }

  findById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe(resposta => {
      this.chamado = resposta;
    });
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

  update(): void {
    this.chamadoService.update(this.chamado).subscribe(() => {
      this.chamadoService.showMessage('Chamado Atualizado com Sucessso!', true);
      this.router.navigate(['*/chamados']);
    })
  }
}
