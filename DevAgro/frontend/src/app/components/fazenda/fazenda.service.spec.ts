import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FazendaService } from './fazenda.service';

describe(FazendaService.name, () => {
  let service: FazendaService;
  let http: HttpClient;

  let baseUrl = 'http://localhost:3001/fazendas';

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, HttpClientModule,BrowserAnimationsModule],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(FazendaService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${FazendaService.prototype.read.name} should call a GET (Fazenda) with the correct endpoint`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.read();
    expect(spy).toHaveBeenCalledOnceWith(baseUrl);
  });

  it(`${FazendaService.prototype.readGrao.name} should call a GET (Grao) with the correct endpoint`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.readGrao();
    expect(spy).toHaveBeenCalledOnceWith(baseUrl);
  });

  it(`${FazendaService.prototype.delete.name} should call a DELETE with the correct endpoint`, () => {
    let spy = spyOn(http, 'delete').and.callThrough();
    service.delete(1);
    expect(spy).toHaveBeenCalledWith(`${baseUrl}/${1}`);
  });

  it(`${FazendaService.prototype.readById.name} should call a PUT with the correct endpoint`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.readById(1);
    expect(spy).toHaveBeenCalledWith(`${baseUrl}/${1}`);
  });

  it(`${FazendaService.prototype.update.name} should call a PUT with the correct endpoint`, () => {
    let spy = spyOn(http, 'put').and.callThrough();
    let fazenda = {
      "name": "Fazenda do Milharal",
      "endereco": "Rua do Milho, 999",
      "grao": "Milho",
      "ultimaColheita": "12/01/2012",
      "cidade": "Blumenau",
      "estoque": 300,
      "id": 30
    }

    service.update(fazenda);
    expect(spy).toHaveBeenCalledWith(`${baseUrl}/${30}`, fazenda);
  });

  it(`${FazendaService.prototype.create.name} should call a POST with the correct endpoint`, () => {
    let spy = spyOn(http, 'post').and.callThrough();
    let fazenda = {
      name: 'Fazenda da Priscila',
      endereco: 'Estrada do Milhos, 87',
      grao: 'Arroz',
      ultimaColheita: '15/05/2011',
      cidade: 'São Bernardo do Campo',
      estoque: null
    }

    service.create(fazenda);
    expect(spy).toHaveBeenCalledWith(baseUrl, fazenda);
  });

  it(`${FazendaService.prototype.errorHandler.name} should be true when the function is toBeDefined` , () => {
    expect(service.errorHandler(true)).toBeDefined();
  });
});
