import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Empresa } from './empresa.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  baseUrl = 'http://localhost:3001/empresas/';

  empresas: Empresa[];

  empresa: Empresa = {
    nome: '',
    email: '',
    cnpj: '',
    endereco: '',
    senha: '',
  };

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  create(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.baseUrl, empresa);
  }

  read(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Empresa> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Empresa>(url).pipe(
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
