import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Funcionario } from './funcionario.model';
import { FuncionarioService } from './funcionario.service';

describe('FuncionarioService', () => {
  let service: FuncionarioService;
  let http: HttpClient;

  let baseUrl = 'http://localhost:3001/funcionarios';

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, HttpClientModule, BrowserAnimationsModule],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(FuncionarioService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${FuncionarioService.prototype.read.name} should call a GET with the correct endpoint`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.read();
    expect(spy).toHaveBeenCalledOnceWith(baseUrl);
  });

  it(`${FuncionarioService.prototype.delete.name} should call a DELETE with the correct endpoint`, () => {
    let spy = spyOn(http, 'delete').and.callThrough();
    service.delete(1);
    expect(spy).toHaveBeenCalledWith(`${baseUrl}/${1}`);
  });

  it(`${FuncionarioService.prototype.readById.name} should call a PUT with the correct endpoint`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.readById(1);
    expect(spy).toHaveBeenCalledWith(`${baseUrl}/${1}`);
  });

  it(`${FuncionarioService.prototype.update.name} should call a PUT with the correct endpoint`, () => {
    let spy = spyOn(http, 'put').and.callThrough();
    let funcionario = {
      "nome": "Kevin Richardson da Silva",
      "fazenda": "Fazenda Santa Helena",
      "data": "01/02/2020",
      "update": "03/05/2022",
      "cpf": "76544478998",
      "telefone": "84921223490",
      "cargo": "Estagiário (compositor)",
      "ativo": false,
      "id": 2
    }

    service.update(funcionario);
    expect(spy).toHaveBeenCalledWith(`${baseUrl}/${2}`, funcionario);
  });

  it(`${FuncionarioService.prototype.create.name} should call a POST with the correct endpoint`, () => {
    let spy = spyOn(http, 'post').and.callThrough();
    let funcionario = {
      nome: 'Diego Costa',
      fazenda: 'Fazenda Feliz',
      data: '01/01/2011',
      update: '15/09/2021',
      cpf: '12345678900',
      telefone: '11965472348',
      cargo: 'Gestor de Colheita',
      ativo: true,
    }

    service.create(funcionario);
    expect(spy).toHaveBeenCalledWith(baseUrl, funcionario);
  });

  it(`${FuncionarioService.prototype.errorHandler.name} should be true when the function is toBeDefined` , () => {
    expect(service.errorHandler(true)).toBeDefined();
  });
});
