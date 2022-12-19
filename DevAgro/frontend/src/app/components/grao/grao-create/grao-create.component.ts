import { FazendaService } from './../../fazenda/fazenda.service';
import { Fazenda } from './../../fazenda/fazenda.model';
import { Router } from '@angular/router';
import { Grao } from './../grao.model';
import { GraoService } from './../grao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grao-create',
  templateUrl: './grao-create.component.html',
  styleUrls: ['./grao-create.component.scss'],
})
export class GraoCreateComponent implements OnInit {
  fazendas: Fazenda[];
  graos: Grao = {
    nome: '',
    previsao_colheita: '',
    informacoes: '',
    fazenda: '',
    ativo: true,
  };

  constructor(
    private sGrao: GraoService,
    private router: Router,
    private fazendaService: FazendaService
  ) {}

  ngOnInit(): void {
    this.fazendaService.read().subscribe((fazenda) => {
      this.fazendas = fazenda;
    });
  }

  isActive(event): void {
    if (event.target.checked) {
      this.graos.ativo = true;
    } else {
      this.graos.ativo = false;
    }
  }

  validatorInputs(): boolean {
    if (
      this.graos.nome.trim() === '' ||
      this.graos.previsao_colheita.trim() === '' ||
      this.graos.informacoes.trim() === '' ||
      this.graos.fazenda.trim() === ''
    ) {
      if (this.graos.nome.trim() === '') {
        document.getElementById('nome').classList.add('obrigatory');
      } else {
        document.getElementById('nome').classList.remove('obrigatory');
      }

      if (this.graos.previsao_colheita.trim() === '') {
        document.getElementById('previsaoColheita').classList.add('obrigatory');
      } else {
        document
          .getElementById('previsaoColheita')
          .classList.remove('obrigatory');
      }

      if (this.graos.informacoes.trim() === '') {
        document.getElementById('informacoes').classList.add('obrigatory');
      } else {
        document.getElementById('informacoes').classList.remove('obrigatory');
      }

      if (this.graos.fazenda.trim() === '') {
        document.getElementById('fazenda').classList.add('obrigatory');
      } else {
        document.getElementById('fazenda').classList.remove('obrigatory');
      }
      return false;
    } else {
      return true;
    }
  }

  changeGrain() {
    this.graos.fazenda = document.querySelector('select').value;
    console.log(document.querySelector('select').value);
  }

  criaGrao(): void {
    if (this.validatorInputs() == true) {
      this.sGrao.create(this.graos).subscribe(() => {
        this.sGrao.showMessage('Grão Criado!');
        this.router.navigate(['/grao']);
      });
    } else {
      this.fazendaService.showMessage(
        'ERRO: Verifique se todos os campos estão preenchidos!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/grao']);
  }
}
