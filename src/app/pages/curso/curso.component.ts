import { Component, OnInit } from '@angular/core';
import { Curso } from '../../core/models/curso.model';
import { Aluno } from '../../core/models/aluno.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CursoService } from '../../core/services/curso.service';
import { AlunoService } from '../../core/services/aluno.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {
  curso!: Curso;
  alunos: Aluno[] = [];
  statusSelecionado = 'todos';

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService,
    private alunoService: AlunoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.cursoService.getCurso(id).subscribe(curso => this.curso = curso);
    this.alunoService.getAlunoByIdCurso(id).subscribe(alunos => this.alunos = alunos);
  }

  get alunosFiltrados(): Aluno[] {
    if (this.statusSelecionado === 'todos') return this.alunos;
    return this.alunos.filter(a => a.status === this.statusSelecionado)
  }
}
