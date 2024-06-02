import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {
  private baseUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { } 

  getUsers(): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.baseUrl);
  }

  addUser(usuario: usuario): Observable<usuario> {
    return this.http.post<usuario>(this.baseUrl, usuario);
  }

  updateUser(id: number, usuario: usuario): Observable<usuario> {
    return this.http.put<usuario>(`${this.baseUrl}/${id}`, usuario);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
