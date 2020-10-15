import { HttpRequest } from '@/interfaces/http.interface';
import { Request, Response } from 'express';

export abstract class HttpHelper {
  static httpRequest(req: Request, res: Response) {
    const httpRequest: HttpRequest = {
      params: req.params,
      body: req.body,
      query: req.query,
    }

    return httpRequest;
  }
}