import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from '../interfaces/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private baseUrl = 'http://localhost:3000/recetas';

  constructor(private http: HttpClient) {}

  getRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.baseUrl);
  }

  getReceta(id: number): Observable<Receta> {
    return this.http.get<Receta>(`${this.baseUrl}/${id}`);
  }

  createReceta(receta: Receta): Observable<Receta> {
    return this.http.post<Receta>(this.baseUrl, receta);
  }

  updateReceta(id: number, receta: Receta): Observable<Receta> {
    return this.http.put<Receta>(`${this.baseUrl}/${id}`, receta);
  }

  deleteReceta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
