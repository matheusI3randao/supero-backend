import { BooksController } from "@/controllers/Books";
import { BooksServices } from "@/services/books.service";
import { HttpHelper } from "@/Utils/http-helper";
import * as express from 'express';
import { Response } from 'express';

class BooksRoutes {
  public router = express.Router();


  constructor() {
    this.initRoutes();
  }

  public initRoutes(): void {
    this.router.get('/books', this.get);
    this.router.get('/books/:id', this.getById);
    this.router.post('/books', this.add);
    this.router.put('/books/:id', this.update);
    this.router.delete('/books/:id', this.delete);
  }

  async get(req: any, res: Response): Promise<Response> {
    const controller = new BooksController(new BooksServices());

    const httpResponse = await controller.get(HttpHelper.httpRequest(req, res));
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }

  async getById(req: any, res: Response): Promise<Response> {
    const controller = new BooksController(new BooksServices());

    const httpResponse = await controller.getById(HttpHelper.httpRequest(req, res));
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }

  async add(req: any, res: Response): Promise<Response> {
    const controller = new BooksController(new BooksServices());

    const httpResponse = await controller.add(HttpHelper.httpRequest(req, res));
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }

  async update(req: any, res: Response): Promise<Response> {
    const controller = new BooksController(new BooksServices());

    const httpResponse = await controller.update(HttpHelper.httpRequest(req, res));
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }

  async delete(req: any, res: Response): Promise<Response> {
    const controller = new BooksController(new BooksServices());

    const httpResponse = await controller.delete(HttpHelper.httpRequest(req, res));
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }
}

export default BooksRoutes;