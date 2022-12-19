import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Grao } from '../grao/grao.model';
import { GraoService } from '../grao/grao.service';
import { Fazenda } from './fazenda.model';

@Injectable({
  providedIn: 'root',
})
export class FazendaService {
  fazenda: Fazenda = {
    name: '',
    endereco: '',
    grao: '',
    ultimaColheita: '',
    cidade: '',
    estoque: null,
  };

  baseUrl = 'http://localhost:3001/fazendas';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private graoService: GraoService
  ) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(fazenda: Fazenda): Observable<Fazenda> {
    return this.http.post<Fazenda>(this.baseUrl, fazenda).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Fazenda[]> {
    return this.http.get<Fazenda[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readGrao(): Observable<Grao[]> {
    return this.http.get<Grao[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Fazenda> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Fazenda>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(fazendas: Fazenda): Observable<Fazenda> {
    const url = `${this.baseUrl}/${fazendas.id}`;
    return this.http.put<Fazenda>(url, fazendas).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Fazenda> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Fazenda>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
