import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { FuncionarioCrudComponent } from './funcionario-crud.component';

describe('FuncionarioCrudComponent', () => {
  let component: FuncionarioCrudComponent;
  let fixture: ComponentFixture<FuncionarioCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuncionarioCrudComponent],
      imports: [MatSnackBarModule, HttpClientModule, RouterTestingModule],
      providers: [MatSnackBar, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
