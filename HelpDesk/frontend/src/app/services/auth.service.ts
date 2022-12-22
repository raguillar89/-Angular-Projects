import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3001/cadastro/'

  jwtService: JwtHelperService = new JwtHelperService();

  authenticate(creds: Credenciais){
      return this.http.post(`${this.baseUrl}/cadastro`, creds, {
        observe: 'response',
        responseType: 'text'
      });
  }

  successfulLogin(authToken: string){
    localStorage.setItem('token', authToken);
  }

  isAutheticated() {
    let token = localStorage.getItem('token');

    if(token != null) {
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }
}