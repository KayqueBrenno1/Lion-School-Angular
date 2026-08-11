import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CursoComponent } from './pages/curso/curso.component';
import { AlunoComponent } from './pages/aluno/aluno.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent, title: 'Lion School SENAI', data: {mainClass: 'main-home'}
    },
    {
        path: 'curso/:id', component: CursoComponent, title: 'Alunos do Curso', data: {mainClass: 'main-curso'}
    },
    {
        path: 'aluno/:id', component: AlunoComponent, title: 'Dados do Aluno', data: {mainClass: 'main-aluno'}
    },
];