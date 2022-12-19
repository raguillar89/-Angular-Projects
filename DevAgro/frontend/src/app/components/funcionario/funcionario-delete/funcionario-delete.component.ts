import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.scss'],
})
export class FuncionarioDeleteComponent implements OnInit {
  funcionario: Funcionario = {
    nome: '',
    fazenda: '',
    data: '',
    update: '',
    cpf: '',
    telefone: '',
    cargo: '',
    ativo: false,
  };

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionarioService.readById(id).subscribe((funcionario) => {
      this.funcionario = funcionario;
    });
  }

  isActive(event): void {
    if (event.target.checked) {
      this.funcionario.ativo = true;
    } else {
      this.funcionario.ativo = false;
    }
  }

  deleteFuncionario(): void {
    this.funcionarioService.delete(this.funcionario.id).subscribe(() => {
      this.funcionarioService.showMessage('Funcionário Excluído com Sucesso!');
      this.router.navigate(['/funcionario']);
    });
  }

  cancel(): void {
    this.router.navigate(['/funcionario']);
  }
}
