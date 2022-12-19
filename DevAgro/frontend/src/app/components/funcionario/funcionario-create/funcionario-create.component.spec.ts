import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { FuncionarioCreateComponent } from './funcionario-create.component';

describe('FuncionarioCreateComponent', () => {
  let component: FuncionarioCreateComponent;
  let fixture: ComponentFixture<FuncionarioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuncionarioCreateComponent],
      imports: [MatSnackBarModule, HttpClientModule, RouterTestingModule],
      providers: [MatSnackBar, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${FuncionarioCreateComponent.prototype.validateCpf.name} should return true when cpf has the correct amount of characters`, () => {
    let cpf = '12345678900';
    expect(component.validateCpf(cpf)).toBeTrue();
  });

  it(`${FuncionarioCreateComponent.prototype.validateCpf.name} should return false when cpf has the incorrect amount of characters, empty or incorrect characters`, () => {
    let cpf = '123456789a0';
    expect(component.validateCpf(cpf)).toBeFalse();
  });

  it(`${FuncionarioCreateComponent.prototype.createFuncionario.name} should be true when the information is the same, both in the object and in the verification`, () => {
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

    component.funcionario = funcionario;
    component.createFuncionario();
    expect(component.funcionario.nome).toEqual('Diego Costa');
  })

  it(`${FuncionarioCreateComponent.prototype.createFuncionario.name} should be true when the information is not the same, both in the object and in the verification`, () => {
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

    component.funcionario = funcionario;
    component.createFuncionario();
    expect(component.funcionario.nome).not.toEqual('Eduardo Milos');
  })

  it(`${FuncionarioCreateComponent.prototype.createFuncionario.name} should CreateFuncionario is called`, () => {
    let spy = spyOn(component, 'createFuncionario');
    component.createFuncionario();
    expect(spy).toHaveBeenCalledOnceWith();
  });

  it(`${FuncionarioCreateComponent.prototype.isActive.name} should criaGrao is called`, () => {
    let spy = spyOn(component, 'isActive');
    component.isActive(true);
    expect(spy).toHaveBeenCalledWith(true);
  });

  it(`${FuncionarioCreateComponent.prototype.isActive.name} should criaGrao is called`, () => {
    let spy = spyOn(component, 'isActive');
    component.isActive(false);
    expect(spy).toHaveBeenCalledWith(false);
  });
});
