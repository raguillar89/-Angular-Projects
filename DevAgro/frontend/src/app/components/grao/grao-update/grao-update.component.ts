import { FazendaService } from './../../fazenda/fazenda.service';
import { Fazenda } from './../../fazenda/fazenda.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GraoService } from './../grao.service';
import { Component, OnInit } from '@angular/core';
import { Grao } from '../grao.model';

@Component({
  selector: 'app-grao-update',
  templateUrl: './grao-update.component.html',
  styleUrls: ['./grao-update.component.scss'],
})
export class GraoUpdateComponent implements OnInit {
  graos: Grao = {
    nome: '',
    previsao_colheita: '',
    informacoes: '',
    fazenda: '',
    ativo: true,
  };
  fazendas: Fazenda[];
  oldFarm: Fazenda;

  constructor(
    private gService: GraoService,
    private router: Router,
    private route: ActivatedRoute,
    private fazendaService: FazendaService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gService.readById(id).subscribe((funcionario) => {
      this.graos = funcionario;
    });
    this.fazendaService.read().subscribe((fazendas) => {
      this.oldFarm = fazendas.find((f) => f.name === this.graos.fazenda);
      this.fazendas = fazendas;
    });
  }

  isActive(event): void {
    if (event.target.checked) {
      this.graos.ativo = true;
    } else {
      this.graos.ativo = false;
    }
  }

  changeFarm() {
    this.graos.fazenda = document.querySelector('select').value;
    console.log(this.graos);
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
  updateGrao(): void {
    if (this.validatorInputs() === true) {
      this.gService.update(this.graos).subscribe(() => {
        this.gService.showMessage('Grão Alterado com Sucesso!');
        this.router.navigate(['/grao']);
      });
    } else {
      this.gService.showMessage(
        'ERRO: Verifique se todos os campos estão preenchidos!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/grao']);
  }
}
