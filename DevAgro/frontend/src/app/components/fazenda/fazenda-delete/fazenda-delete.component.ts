import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fazenda } from '../fazenda.model';
import { FazendaService } from '../fazenda.service';

@Component({
  selector: 'app-fazenda-delete',
  templateUrl: './fazenda-delete.component.html',
  styleUrls: ['./fazenda-delete.component.scss'],
})
export class FazendaDeleteComponent implements OnInit {
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

  deleteFazenda(): void {
    this.fazendaService.delete(this.fazenda.id).subscribe(() => {
      this.fazendaService.showMessage('Fazenda Excluída com Sucesso!');
      this.router.navigate(['/fazenda']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fazenda']);
  }
}
