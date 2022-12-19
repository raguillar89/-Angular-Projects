import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { FazendaCrudComponent } from './fazenda-crud.component';

describe('FazendaCrudComponent', () => {
  let component: FazendaCrudComponent;
  let fixture: ComponentFixture<FazendaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FazendaCrudComponent],
      imports: [MatSnackBarModule, HttpClientModule, RouterTestingModule],
      providers: [MatSnackBar, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
