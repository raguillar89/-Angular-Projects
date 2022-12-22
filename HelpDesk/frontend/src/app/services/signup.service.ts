import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { Cadastro } from '../models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseUrl = 'http://localhost:3001/cadastros/';

  cads: Cadastro[];

  cad: Cadastro = {
    nome: '',
    telefone: '',
    email: '',
    senha: '',
  };

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  create(cad: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseUrl, cad);
  }

  read(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Cadastro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cadastro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
