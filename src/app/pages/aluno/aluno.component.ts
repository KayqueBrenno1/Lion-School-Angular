import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/models/aluno.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../../core/services/aluno.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent implements OnInit {
  aluno!: Aluno;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.alunoService.getAluno(id).subscribe(aluno => this.aluno = aluno);
  }

  definirCor(nota: number): string {
    if (nota < 50) return 'reprovado';
    if (nota < 75) return 'recuperacao';
    return 'aprovado';
  }

  voltar() {
    this.router.navigate(['/curso', this.aluno.curso_id])
  }
}
