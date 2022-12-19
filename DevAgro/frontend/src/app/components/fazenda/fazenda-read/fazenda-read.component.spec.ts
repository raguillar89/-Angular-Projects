import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { FazendaReadComponent } from './fazenda-read.component';

describe('FazendaReadComponent', () => {
  let component: FazendaReadComponent;
  let fixture: ComponentFixture<FazendaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FazendaReadComponent],
      imports: [
        MatSnackBarModule,
        HttpClientModule,
        RouterTestingModule,
        OverlayModule,
      ],
      providers: [MatSnackBar, HttpClient, Overlay],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
