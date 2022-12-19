import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';
import { EmpresaService } from './empresa.service';

describe('EmpresaService', () => {
  let service: EmpresaService;
  let http: HttpClient;

  let baseUrl = 'http://localhost:3001/empresas/';

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, HttpClientModule, BrowserAnimationsModule],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(EmpresaService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${EmpresaService.prototype.read.name} should call a GET with the correct endpoint`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.read();
    expect(spy).toHaveBeenCalledOnceWith(baseUrl);
  });

  it(`${EmpresaService.prototype.errorHandler.name} should be true when the function is toBeDefined` , () => {
    expect(service.errorHandler(true)).toBeDefined();
  });

  it(`${EmpresaService.prototype.readById.name} should call a PUT with the correct endpoint`, () => {
    let spy = spyOn(http, 'get').and.callThrough();
    service.readById(1);
    expect(spy).toHaveBeenCalledWith(`${baseUrl}/${1}`);
  });

  it(`${EmpresaService.prototype.create.name} should call a POST with the correct endpoint`, () => {
    let spy = spyOn(http, 'post').and.callThrough();
    let empresa = {
      nome: 'Noah StartUp',
      email: 'noah@gmail.com',
      cnpj: '77665544332211',
      endereco: 'Rua do Noah, 1',
      senha: '11072021'
    }

    service.create(empresa);
    expect(spy).toHaveBeenCalledWith(baseUrl, empresa);
  });

});
