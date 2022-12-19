import { Grao } from './grao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraoService {
  url_Grao = 'http://localhost:3001/graos';
  url_fazenda = 'http://localhost:3001/fazendas';

  graos: Grao = {
    nome: '',
    previsao_colheita: '',
    informacoes: '',
    fazenda: '',
    ativo: true,
  };

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(grao: Grao): Observable<Grao> {
    return this.http.post<Grao>(this.url_Grao, grao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  pegaGraos(): Observable<Grao[]> {
    return this.http.get<Grao[]>(this.url_Grao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Grao> {
    const url = `${this.url_Grao}/${id}`;
    return this.http.get<Grao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(grao: Grao): Observable<Grao> {
    const url = `${this.url_Grao}/${grao.id}`;
    return this.http.put<Grao>(url, grao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Grao> {
    const url = `${this.url_Grao}/${id}`;
    return this.http.delete<Grao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Grao[]> {
    return this.http.get<Grao[]>(this.url_Grao);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
