import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FazendaService } from '../../fazenda/fazenda.service';
import { Fazenda } from '../../fazenda/fazenda.model';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.scss'],
})
export class FuncionarioCreateComponent implements OnInit {
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

  fazendas: Fazenda[];

  constructor(
    private funcionarioService: FuncionarioService,
    private fazendaService: FazendaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fazendaService.read().subscribe((fazendas) => {
      this.fazendas = fazendas;
    });
  }

  isActive(event): void {
    if (event.target.checked) {
      this.funcionario.ativo = true;
    } else {
      this.funcionario.ativo = false;
    }
  }

  teste() {
    document.querySelector('');
  }

  changeFarm() {
    this.funcionario.fazenda = document.querySelector('select').value;
  }

  validatorInputs(): boolean {
    if (
      this.funcionario.nome.trim() === '' ||
      this.funcionario.fazenda.trim() === '' ||
      this.funcionario.cpf.trim() === '' ||
      this.funcionario.telefone.trim() === '' ||
      this.funcionario.cargo.trim() === ''
    ) {
      if (this.funcionario.nome.trim() === '') {
        document.getElementById('nome').classList.add('obrigatory');
      } else {
        document.getElementById('nome').classList.remove('obrigatory');
      }

      if (this.funcionario.fazenda.trim() === '') {
        document.getElementById('fazenda').classList.add('obrigatory');
      } else {
        document.getElementById('fazenda').classList.remove('obrigatory');
      }

      if (this.funcionario.cpf.trim() === '') {
        document.getElementById('cpf').classList.add('obrigatory');
      } else {
        document.getElementById('cpf').classList.remove('obrigatory');
      }

      if (this.funcionario.telefone.trim() === '') {
        document.getElementById('telefone').classList.add('obrigatory');
      } else {
        document.getElementById('telefone').classList.remove('obrigatory');
      }

      if (this.funcionario.cargo.trim() === '') {
        document.getElementById('cargo').classList.add('obrigatory');
      } else {
        document.getElementById('cargo').classList.remove('obrigatory');
      }
      return false;
    } else {
      return true;
    }
  }

  createFuncionario(): void {
    if (this.validatorInputs() === true) {
      if (!this.validateCpf(this.funcionario.cpf.trim())) {
        this.funcionarioService.showMessage('Formato de CPF inválido', true);
        throw new Error('Formato de CPF inválido');
      }

      this.funcionario.data = new Date(Date.now()).toLocaleDateString();
      this.funcionario.update = this.funcionario.data;
      this.funcionarioService.create(this.funcionario).subscribe(() => {
        this.funcionarioService.showMessage('Funcionario Criado!');
        this.router.navigate(['/funcionario']);
      });
    } else {
      this.funcionarioService.showMessage(
        'ERRO: Verifique se todos os campos estão preenchidos!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/funcionario']);
  }

  validateCpf(cpf: string): boolean {
    var cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpf)) {
      return false;
    }
    return true;
  }
}
