import { api } from '@/main/config/api';
import { AddParams, Book, ResultBooks } from '@/models/books.model';

const STATUS_SUCESS = 204;

export class BooksServices {
  async getById(id: string): Promise<Book> {
    const response = await api.get<Book>(`livros/${id}`)
    return response.data;
  }

  async update(id: string, params: AddParams): Promise<boolean> {
    const response = await api.put<Book>(`livros/${id}`, params);
    return response.status === STATUS_SUCESS;
  }

  async get(search?: string, anoInicial?: number, anoFinal?: number, page?: number): Promise<ResultBooks> {
    const queryParameters = []
    if (search) {
      queryParameters.push(`Busca=${search}`);
    }
    if (anoInicial) {
      queryParameters.push(`AnoInicial=${anoInicial}`);
    }
    if (anoFinal) {
      queryParameters.push(`AnoFinal=${anoFinal}`);
    }

    if (page) {
      queryParameters.push(`SkipCount=${page}`);
    }

    const response = await api.get<ResultBooks>(`livros?${queryParameters.join('&')}`)
    return response.data;
  }

  async add(params: AddParams): Promise<Book> {
    const { titulo, isbn, autor, editora, ano, idioma, peso, comprimento, largura, altura } = params;
    const response = await api.post<Book>('livros', { titulo, isbn, autor, editora, ano, idioma, peso, comprimento, largura, altura });
    return response.data;
  }

  async delete(id: string): Promise<Book> {
    const response = await api.delete<Book>(`livros/${id}`);
    return response.data;
  }
}
