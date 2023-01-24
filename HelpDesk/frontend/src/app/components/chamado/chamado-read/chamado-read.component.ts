import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrls: ['./chamado-read.component.scss']
})
export class ChamadoReadComponent implements OnInit {

  chamado: Chamado = {
    prioridade: '',
    status: '',
    titulo: '',
    descricao: '',
    tecnico: '',
    cliente: '',
  }

  constructor(private chamadoService: ChamadoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id');
    this.findById();
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
}
