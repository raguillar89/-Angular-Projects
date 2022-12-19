import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { GraoReadComponent } from '../grao-read/grao-read.component';

import { GraoCreateComponent } from './grao-create.component';

describe('GraoCreateComponent', () => {
  let component: GraoCreateComponent;
  let fixture: ComponentFixture<GraoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraoCreateComponent],
      imports: [MatSnackBarModule, HttpClientModule, RouterTestingModule,
        OverlayModule,
        BrowserAnimationsModule],
      providers: [MatSnackBar, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${GraoCreateComponent.prototype.graos} should be true when the information is the same, both in the object and in the verification`, () => {
    let grao = {
      nome: 'Chia',
      previsao_colheita: '25/12/2022',
      informacoes: '',
      fazenda: 'Fazenda Feliz',
      ativo: true,
    }

    component.graos = grao;
    expect(component.graos.ativo).toEqual(true);
  })

  it(`${GraoCreateComponent.prototype.graos} should be true when the information is not the same, both in the object and in the verification`, () => {
    let grao = {
      nome: 'Chia',
      previsao_colheita: '25/12/2022',
      informacoes: '',
      fazenda: 'Fazenda Feliz',
      ativo: false,
    }

    component.graos = grao;
    expect(component.graos.ativo).toEqual(false);
  })

  it(`${GraoCreateComponent.prototype.criaGrao.name} should criaGrao is called`, () => {
    let spy = spyOn(component, 'criaGrao');
    component.criaGrao();
    expect(spy).toHaveBeenCalledOnceWith();
  });

  it(`${GraoCreateComponent.prototype.isActive.name} should criaGrao is called`, () => {
    let spy = spyOn(component, 'isActive');
    component.isActive(true);
    expect(spy).toHaveBeenCalledWith(true);
  });

  it(`${GraoCreateComponent.prototype.isActive.name} should criaGrao is called`, () => {
    let spy = spyOn(component, 'isActive');
    component.isActive(false);
    expect(spy).toHaveBeenCalledWith(false);
  });
});
