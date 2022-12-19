import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { GraoUpdateComponent } from './grao-update.component';

describe('GraoUpdateComponent', () => {
  let component: GraoUpdateComponent;
  let fixture: ComponentFixture<GraoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraoUpdateComponent],
      imports: [MatSnackBarModule, HttpClientModule, RouterTestingModule],
      providers: [MatSnackBar, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
