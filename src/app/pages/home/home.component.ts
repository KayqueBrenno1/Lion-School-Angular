import { Component, OnInit } from '@angular/core';
import { Curso } from '../../core/models/curso.model';
import { CursoService } from '../../core/services/curso.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit() {
    this.cursoService.getCursos().subscribe(cursos => this.cursos = cursos);
  }
}
