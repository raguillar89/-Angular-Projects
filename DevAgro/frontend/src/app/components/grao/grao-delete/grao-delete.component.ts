import { ActivatedRoute, Router } from '@angular/router';
import { GraoService } from './../grao.service';
import { Grao } from './../grao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grao-delete',
  templateUrl: './grao-delete.component.html',
  styleUrls: ['./grao-delete.component.scss'],
})
export class GraoDeleteComponent implements OnInit {
  grao: Grao = {
    nome: '',
    previsao_colheita: '',
    informacoes: '',
    fazenda: '',
    ativo: true,
  };

  constructor(
    private gService: GraoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gService.readById(id).subscribe((grao) => {
      this.grao = grao;
    });
  }

  isActive(event): void {
    if (event.target.checked) {
      this.grao.ativo = true;
    } else {
      this.grao.ativo = false;
    }
  }

  deletarGrao(): void {
    this.gService.delete(this.grao.id).subscribe(() => {
      this.gService.showMessage('Grão Excluído com Sucesso!');
      this.router.navigate(['/grao']);
    });
  }

  cancel(): void {
    this.router.navigate(['/grao']);
  }
}
