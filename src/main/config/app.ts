import cors from 'cors';
import { Application } from 'express';
import 'reflect-metadata';
import { contentType } from "./../../Utils/content-type";
import express = require('express')

class App {
  public app: Application
  public port: number

  constructor(appInit: { port: number, middleWares: any, controllers: any }) {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(contentType);
    this.port = appInit.port;
    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
    this.assets();
  }

  private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }): void {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare)
    })
  }

  private routes(controllers: { forEach: (arg0: (controller: any) => void) => void }): void {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router)
    })
  }

  private assets(): void {
    this.app.use(express.static('public'))
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the https://localhost:${this.port}`)
    })
  }
}

export default App;