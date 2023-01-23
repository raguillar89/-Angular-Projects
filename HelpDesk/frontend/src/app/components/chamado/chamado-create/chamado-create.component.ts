import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.scss']
})
export class ChamadoCreateComponent {

  prioridade: FormControl = new FormControl(null, [Validators.required]);
  status: FormControl = new FormControl(null, [Validators.required]);
  titulo: FormControl = new FormControl(null, [Validators.required]);
  descricao: FormControl = new FormControl(null, [Validators.required]);
  tecnico: FormControl = new FormControl(null, [Validators.required]);
  cliente: FormControl = new FormControl(null, [Validators.required]);

  constructor(private router: Router, private chamadoService: ChamadoService) {}

  ngOnInit(): void { }

  validaCampos(): boolean {
    return this.prioridade.valid && this.status.valid && this.titulo.valid && this.descricao.valid && this.tecnico.valid && this.cliente.valid;
  }

  create(): void {
    this.chamadoService.create(this.tecnico).subscribe(() => {
      this.chamadoService.showMessage('Chamado Criado com Sucesso!', true);
      this.router.navigate(['*/chamados']);
    })
  }
}
