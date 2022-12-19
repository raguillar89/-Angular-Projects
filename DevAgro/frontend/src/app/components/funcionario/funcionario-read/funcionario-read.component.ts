import { FuncionarioService } from './../funcionario.service';
import { Component, OnInit, Output } from '@angular/core';
import { Funcionario } from '../funcionario.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.scss'],
})
export class FuncionarioReadComponent implements OnInit {
  @Output() headerTitle = 'Funcionario';

  funcionarios: Funcionario[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.funcionarioService.read().subscribe((funcionario) => {
      this.funcionarios = funcionario;
    });
  }
}
