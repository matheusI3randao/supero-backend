import 'module-alias/register'
import App from './config/app'
import BooksRoutes from './routes/books.routes'

const app = new App({
  port: 8000,
  controllers: [
    new BooksRoutes(),
  ],
  middleWares: []
})

app.listen()
