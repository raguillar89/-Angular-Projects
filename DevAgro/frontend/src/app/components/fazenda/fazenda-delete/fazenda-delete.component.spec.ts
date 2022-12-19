import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { FazendaDeleteComponent } from './fazenda-delete.component';

describe('FazendaDeleteComponent', () => {
  let component: FazendaDeleteComponent;
  let fixture: ComponentFixture<FazendaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FazendaDeleteComponent],
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
    fixture = TestBed.createComponent(FazendaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
