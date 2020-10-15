import { BooksServices } from "@/services/books.service";
import { ok, serverError } from '@/Utils/http-erros-helper';
import { HttpRequest, HttpResponse } from "../../interfaces/http.interface";

export class BooksController {
    constructor(private readonly bookService: BooksServices) { }

    async get(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { search, anoInicial, anoFinal, page } = httpRequest.query

            const result = await this.bookService.get(search, anoInicial, anoFinal, page);
            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async getById(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const result = await this.bookService.getById(httpRequest.params.id);
            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async add(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { titulo, isbn, autor, editora, ano, idioma, peso, comprimento, largura, altura } = httpRequest.body;
            const result = await this.bookService.add({ titulo, isbn, autor, editora, ano, idioma, peso, comprimento, largura, altura });
            return ok(result)
        } catch (error) {
            return serverError(error);
        }
    }

    async update(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;
            const { titulo, isbn, autor, editora, ano, idioma, peso, comprimento, largura, altura } = httpRequest.body;
            console.log(titulo)
            const books = await this.bookService.update(id, { titulo, isbn, autor, editora, ano, idioma, peso, comprimento, largura, altura });
            return ok({ updated: books });
        } catch (error) {
            return serverError(error);
        }
    }

    async delete(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const result = await this.bookService.delete(httpRequest.params.id);
            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }
}
