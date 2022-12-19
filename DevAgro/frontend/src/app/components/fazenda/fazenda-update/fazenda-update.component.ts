import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fazenda } from '../fazenda.model';
import { FazendaService } from '../fazenda.service';

@Component({
  selector: 'app-fazenda-update',
  templateUrl: './fazenda-update.component.html',
  styleUrls: ['./fazenda-update.component.scss'],
})
export class FazendaUpdateComponent implements OnInit {
  fazenda: Fazenda = {
    name: '',
    endereco: '',
    grao: '',
    ultimaColheita: '',
    cidade: '',
    estoque: null,
  };

  constructor(
    private fazendaService: FazendaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fazendaService.readById(id).subscribe((fazenda) => {
      this.fazenda = fazenda;
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

      return false;
    } else {
      return true;
    }
  }

  updateFazenda(): void {
    if (this.validatorInputs() == true) {
      this.fazendaService.update(this.fazenda).subscribe(() => {
        this.fazendaService.showMessage('Fazenda Alterada com Sucesso!');
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
