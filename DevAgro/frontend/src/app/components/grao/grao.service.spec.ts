import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraoService } from './grao.service';

describe('GraoService', () => {
  let service: GraoService;
  let http: HttpClient;

  let url_Grao = 'http://localhost:3001/graos';

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, HttpClientModule, BrowserAnimationsModule],
    });
    service = TestBed.inject(GraoService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${GraoService.prototype.pegaGraos.name} should call a GET with the correct endpoint`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.pegaGraos();
    expect(spy).toHaveBeenCalledOnceWith(url_Grao);
  });

  it(`${GraoService.prototype.read.name} should call a GET with the correct endpoint`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.read();
    expect(spy).toHaveBeenCalledOnceWith(url_Grao);
  });

  it(`${GraoService.prototype.delete.name} should call a DELETE with the correct endpoint`, () => {
    let spy = spyOn(http, 'delete').and.callThrough();
    service.delete(1);
    expect(spy).toHaveBeenCalledOnceWith(`${url_Grao}/${1}`);
  });

  it(`${GraoService.prototype.readById.name} should call a PUT with the correct endpoint`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.readById(1);
    expect(spy).toHaveBeenCalledOnceWith(`${url_Grao}/${1}`);
  });

  it(`${GraoService.prototype.update.name} should call a PUT with the correct endpoint`, () => {
    let spy = spyOn(http, 'put').and.callThrough();
    let grao = {
      "id": 3,
      "nome": "Arroz",
      "previsao_colheita": "29/11/2022",
      "informacoes": "Tipo 1 ",
      "fazenda": "Fazenda do Amaral",
      "ativo": false
    }

    service.update(grao);
    expect(spy).toHaveBeenCalledWith(`${url_Grao}/${3}`, grao);
  });

  it(`${GraoService.prototype.create.name} should call a POST with the correct endpoint`, () => {
    let spy = spyOn(http, 'post').and.callThrough();
    let grao = {
      nome: 'Chia',
      previsao_colheita: '25/12/2022',
      informacoes: '',
      fazenda: 'Fazenda Feliz',
      ativo: false,
    }

    service.create(grao);
    expect(spy).toHaveBeenCalledWith(url_Grao, grao);
  });

  it(`${GraoService.prototype.errorHandler.name} should be true when the function is toBeDefined` , () => {
    expect(service.errorHandler(true)).toBeDefined();
  });
});
