import { Categoria } from './categoria';

export interface Produto {

    id: number;
    categoria: Categoria;
    nome: string;
    descricao: string;
    valor: number;
    quantidade: number;

}

