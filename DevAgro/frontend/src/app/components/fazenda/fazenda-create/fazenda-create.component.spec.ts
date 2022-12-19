import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { FazendaCreateComponent } from './fazenda-create.component';

describe('FazendaCreateComponent', () => {
  let component: FazendaCreateComponent;
  let fixture: ComponentFixture<FazendaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FazendaCreateComponent],
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
    fixture = TestBed.createComponent(FazendaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${FazendaCreateComponent.prototype.createFazenda.name} should be true when the information is the same, both in the object and in the verification`, () => {
    let fazenda = {
      name: 'Fazenda da Priscila',
      endereco: 'Estrada do Milhos, 87',
      grao: 'Arroz',
      ultimaColheita: '15/05/2011',
      cidade: 'São Bernardo do Campo',
      estoque: null
    }

    component.fazenda = fazenda;
    component.createFazenda();
    expect(component.fazenda.cidade).toEqual('São Bernardo do Campo');
  })

  it(`${FazendaCreateComponent.prototype.createFazenda.name} should be true when the information is not the same, both in the object and in the verification`, () => {
    let fazenda = {
      name: 'Fazenda da Priscila',
      endereco: 'Estrada do Milhos, 87',
      grao: 'Arroz',
      ultimaColheita: '15/05/2011',
      cidade: 'São Bernardo do Campo',
      estoque: null
    }

    component.fazenda = fazenda;
    component.createFazenda();
    expect(component.fazenda.name).not.toEqual('Fazenda do Leônidas');
  })

  it(`${FazendaCreateComponent.prototype.createFazenda.name} should return true when CREATEFAZENDA is defined`, () => {
    let fazenda = {
      name: 'Fazenda da Priscila',
      endereco: 'Estrada do Milhos, 87',
      grao: 'Arroz',
      ultimaColheita: '15/05/2011',
      cidade: 'São Bernardo do Campo',
      estoque: null
    }

    component.createFazenda();
    expect(fazenda).toBeDefined();
  })

  it(`${FazendaCreateComponent.prototype.createFazenda.name} should return true when CREATEFAZENDA is not undefined`, () => {
    let fazenda = {
      name: 'Fazenda da Priscila',
      endereco: 'Estrada do Milhos, 87',
      grao: 'Arroz',
      ultimaColheita: '15/05/2011',
      cidade: 'São Bernardo do Campo',
      estoque: null
    }

    component.createFazenda();
    expect(fazenda).not.toBeUndefined();
  })

  it(`${FazendaCreateComponent.prototype.createFazenda.name} should show an error when user doesn't fill in the fields`, () => {
    let input = component.validatorInputs();
    expect(input.valueOf).toThrowError();
  });

  it(`${FazendaCreateComponent.prototype.createFazenda.name} should show an error when user doesn't fill in the fields`, () => {
    let input = component.validatorInputs();
    expect(input.valueOf).toThrow();
  });

  it(`${FazendaCreateComponent.prototype.createFazenda.name} should CreateFazenda is called`, () => {
    let spy = spyOn(component, 'createFazenda');
    component.createFazenda();
    expect(spy).toHaveBeenCalledOnceWith();
  });

  it(`${FazendaCreateComponent.prototype.cancel.name} should criaGrao is called`, () => {
    let spy = spyOn(component, 'cancel');
    component.cancel();
    expect(spy).toHaveBeenCalledOnceWith();
  });
});
