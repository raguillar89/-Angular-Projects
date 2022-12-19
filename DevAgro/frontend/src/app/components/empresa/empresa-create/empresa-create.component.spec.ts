import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EmpresaCreateComponent } from './empresa-create.component';

describe('EmpresaCreateComponent', () => {
  let component: EmpresaCreateComponent;
  let fixture: ComponentFixture<EmpresaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpresaCreateComponent],
      imports: [
        MatSnackBarModule,
        HttpClientModule,
        RouterTestingModule,
        OverlayModule,
        BrowserAnimationsModule
      ],
      providers: [MatSnackBar, HttpClient, Overlay],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${EmpresaCreateComponent.prototype.validatePassword.name} should return true when password1 and password2 are the same`, () => {
    let password1 = '123456';
    let password2 = '123456';
    expect(component.validatePassword(password1, password2)).toBeTrue();
  });

  it(`${EmpresaCreateComponent.prototype.validatePassword.name} should return false when password1 and password2 are not the same`, () => {
    let password1 = '12356';
    let password2 = '123456';
    expect(component.validatePassword(password1, password2)).toBeFalse();
  });

  it(`${EmpresaCreateComponent.prototype.validateCnpj.name} should return true when cnpj has the correct amount of characters`, () => {
    let cnpj = '11111111111111';
    expect(component.validateCnpj(cnpj)).toBeTrue();
  });

  it(`${EmpresaCreateComponent.prototype.validateCnpj.name} should return false when cnpj has the incorrect amount of characters`, () => {
    let cnpj = '111111111111111';
    expect(component.validateCnpj(cnpj)).toBeFalse();
  });

  it(`${EmpresaCreateComponent.prototype.validateEmailFormat.name} should return true when the email is formatted correctly`, () => {
    let email = 'renan.pinho@gmail.com';
    expect(component.validateEmailFormat(email)).toBeTrue();
  });

  it(`${EmpresaCreateComponent.prototype.validateEmailFormat.name} should return false when the email is formatted incorrectly`, () => {
    let email = 'renan.pinhogmail.com';
    expect(component.validateEmailFormat(email)).toBeFalse();
  });

  it(`${EmpresaCreateComponent.prototype.validateEmail.name} should return false when there is no email or formatted incorrectly`, () => {
    let email = '';
    expect(component.validateEmail(email)).toBeFalse();
  });

  it(`${EmpresaCreateComponent.prototype.validateEmail.name} should return true when there is formatted correctly`, () => {
    let email = 'renan.pinho@gmail.com';
    expect(component.validateEmail(email)).toBeTrue();
  });

  it(`${EmpresaCreateComponent.prototype.empresa} should be true when the information is the same, both in the object and in the verification`, () => {
    let empresa = {
      nome: 'Noah StartUp',
      email: 'noah@gmail.com',
      cnpj: '77665544332211',
      endereco: 'Rua do Noah, 1',
      senha: '11072021',
      senha2: '11072021'
    }

    component.empresa = empresa;
    expect(component.empresa.senha).toEqual('11072021');
  })

  it(`${EmpresaCreateComponent.prototype.empresa} should be true when the information is not the same, both in the object and in the verification`, () => {
    let empresa = {
      nome: 'Noah StartUp',
      email: 'noah@gmail.com',
      cnpj: '77665544332211',
      endereco: 'Rua do Noah, 1',
      senha: '11072021',
      senha2: '11072021'
    }

    component.empresa = empresa;
    expect(component.empresa.nome).not.toEqual('StartUp Noah');
  })

  it(`${EmpresaCreateComponent.prototype.createEmpresa.name} should show an error when user doesn't fill in the fields`, () => {
    let input = component.inputValidator();
    expect(input.valueOf).toThrow();
  });

  it(`${EmpresaCreateComponent.prototype.createEmpresa.name} should show an error when user doesn't fill in the fields`, () => {
    let input = component.inputValidator();
    expect(input.valueOf).toThrowError();
  });

  it(`${EmpresaCreateComponent.prototype.createEmpresa.name} should CreateEmpresa is called`, () => {
    let spy = spyOn(component, 'createEmpresa');
    component.createEmpresa();
    expect(spy).toHaveBeenCalledOnceWith();
  });

  it(`${EmpresaCreateComponent.prototype.togglePassword.name} should criaGrao is called`, () => {
    let spy = spyOn(component, 'togglePassword');
    component.togglePassword();
    expect(spy).toHaveBeenCalledOnceWith();
  });

  it(`${EmpresaCreateComponent.prototype.toggleRetypePassword.name} should criaGrao is called`, () => {
    let spy = spyOn(component, 'toggleRetypePassword');
    component.toggleRetypePassword();
    expect(spy).toHaveBeenCalledOnceWith();
  });

  it(`${EmpresaCreateComponent.prototype.navigateToLogiIn.name} should criaGrao is called`, () => {
    let spy = spyOn(component, 'navigateToLogiIn');
    component.navigateToLogiIn();
    expect(spy).toHaveBeenCalledOnceWith();
  });
});
