import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnicos';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.scss']
})
export class TecnicoDeleteComponent {

  tecnico: Tecnico = {
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }

  constructor(private tecnicoService: TecnicoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tecnico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.tecnicoService.findById(this.tecnico.id).subscribe(resposta => {
      resposta.perfis = [];
      this.tecnico = resposta;
    });
  }

  delete(): void {
    this.tecnicoService.delete(this.tecnico.id).subscribe(() => {
      this.tecnicoService.showMessage('Técnico Deletado com Sucesso!', true);
      this.router.navigate(['*/tecnicos']);
    })
  }
}
