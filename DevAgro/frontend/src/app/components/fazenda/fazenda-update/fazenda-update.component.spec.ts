import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FazendaUpdateComponent } from './fazenda-update.component';

describe('FazendaUpdateComponent', () => {
  let component: FazendaUpdateComponent;
  let fixture: ComponentFixture<FazendaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FazendaUpdateComponent],
      imports: [MatSnackBarModule, HttpClientModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return '5';
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(FazendaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
