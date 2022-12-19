import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { FuncionarioService } from '../funcionario.service';
import { FuncionarioReadComponent } from './funcionario-read.component';

describe('FuncionarioReadComponent', () => {
  let component: FuncionarioReadComponent;
  let fixture: ComponentFixture<FuncionarioReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuncionarioReadComponent],
      imports: [MatSnackBarModule, HttpClientModule, RouterTestingModule],
      providers: [MatSnackBar, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
