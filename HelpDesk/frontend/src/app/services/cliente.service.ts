import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../components/config/api.config';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[];

  cliente: Cliente = {
      nome: '',
      cpf: '',
      email: '',
      senha: '',
      perfis: [],
      dataCriacao: ''
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  findById(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`);
  }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/clientes`);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/clientes`, cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${API_CONFIG.baseUrl}/clientes/${cliente.id}`, cliente);
  }

  delete(id: any): Observable<Cliente> {
    return this.http.delete<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`);
  }
}
