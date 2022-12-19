import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grao } from '../../grao/grao.model';
import { GraoService } from '../../grao/grao.service';
import { Fazenda } from '../fazenda.model';
import { FazendaService } from '../fazenda.service';

@Component({
  selector: 'app-fazenda-create',
  templateUrl: './fazenda-create.component.html',
  styleUrls: ['./fazenda-create.component.scss'],
})
export class FazendaCreateComponent implements OnInit {
  fazenda: Fazenda = {
    name: '',
    endereco: '',
    grao: '',
    ultimaColheita: '',
    cidade: '',
    estoque: null,
  };

  graos: Grao[];

  constructor(
    private fazendaService: FazendaService,
    private graoService: GraoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.graoService.read().subscribe((graos) => {
      this.graos = graos;
    });
  }

  validatorInputs(): boolean {
    if (
      this.fazenda.name.trim() === '' ||
      this.fazenda.endereco.trim() === '' ||
      this.fazenda.grao.trim() === '' ||
      this.fazenda.ultimaColheita.trim() === ''
    ) {
      if (this.fazenda.name.trim() === '') {
        document.getElementById('name').classList.add('obrigatory');
      } else {
        document.getElementById('name').classList.remove('obrigatory');
      }

      if (this.fazenda.endereco.trim() === '') {
        document.getElementById('endereco').classList.add('obrigatory');
      } else {
        document.getElementById('endereco').classList.remove('obrigatory');
      }

      if (this.fazenda.grao.trim() === '') {
        document.getElementById('grao').classList.add('obrigatory');
      } else {
        document.getElementById('grao').classList.remove('obrigatory');
      }

      if (this.fazenda.ultimaColheita.trim() === '') {
        document.getElementById('ultimaColheita').classList.add('obrigatory');
      } else {
        document
          .getElementById('ultimaColheita')
          .classList.remove('obrigatory');
      }

      if (this.fazenda.cidade.trim() === '') {
        document.getElementById('cidade').classList.add('obrigatory');
      } else {
        document.getElementById('cidade').classList.remove('obrigatory');
      }

      return false;
    } else {
      return true;
    }
  }

  createFazenda(): void {
    if (this.validatorInputs() == true) {
      this.fazendaService.create(this.fazenda).subscribe(() => {
        this.fazendaService.showMessage('Fazenda Criado!');
        this.router.navigate(['/fazenda']);
      });
    } else {
      this.fazendaService.showMessage(
        'ERRO: Verifique se todos os campos estão preenchidos!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/fazenda']);
  }
}
