import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../components/config/api.config';
import { Tecnicos } from '../models/tecnicos';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  tecnicos: Tecnicos[];

  tecnico: Tecnicos = {
      nome: '',
      cpf: '',
      email: '',
      senha: '',
      perfis: [''],
      dataCriacao: ''
  }

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tecnicos[]> {
    return this.http.get<Tecnicos[]>(`${API_CONFIG.baseUrl}/tecnicos`);
  }
}
