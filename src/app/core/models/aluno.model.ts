export interface Desempenho {
    categoria: string;
    valor: number;
}

export interface Aluno {
    id: number;
    nome: string;
    foto: string;
    curso_id: number;
    status: 'cursando' | 'finalizado';
    desempenho: Desempenho[];
}