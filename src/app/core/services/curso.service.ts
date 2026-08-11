import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private readonly URL = 'https://lion-school-phbo.onrender.com/cursos';

  constructor(private http: HttpClient) {}

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.URL);
  }

  getCurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.URL}/${id}`);
  }
}
