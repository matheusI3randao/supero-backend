export interface Book {
  id: string;
  titulo: string;
  isbn: string;
  autor: string;
  editora: string;
  ano: number;
  idioma: string;
  peso: number;
  comprimento: number;
  largura: number;
  altura: number;
}

export interface ResultBooks {
  items: ItemBook[];
  totalCount: number;
}

export type ItemBook = Omit<Book, 'idioma' | 'peso' | 'comprimento' | 'largura' | 'altura'>;
export type AddParams = Omit<Book, 'id'>;