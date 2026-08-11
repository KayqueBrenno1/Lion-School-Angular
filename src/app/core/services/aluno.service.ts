import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private readonly URL = 'https://lion-school-phbo.onrender.com/alunos';

  constructor(private http: HttpClient) { }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.URL);
  }

  getAluno(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.URL}/${id}`);
  }


  getAlunoByIdCurso(idCurso: number): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.URL}?curso_id=${idCurso}`);
  }


  getAlunoByStatus(status: string): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.URL}?status=${status}`);
  }
}
