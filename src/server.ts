import "reflect-metadata";
import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors";
import { router } from './routes';

import "./database";

const app = express();

//precisamos falar pro express pra habilitar nosso app pra trabalhar
//com json
app.use(express.json());
app.use(router);

//middleware para tratar erro (deve ser após usar o router)
app.use((err:Error, request: Request, response: Response, next: NextFunction) => {
  //verificação do q vem no erro e se é do tipo que vem do service
  //se for do nosso throw new error, faremos a tratativa
  if(err instanceof Error) {
    return response.status(400).json({ message: err.message })
  }

  //se for qlqr outro tipo de erro posso dar um status 500 por ex
  return response.status(500).json({ status: "error", message: "Internal Server Error"})
})

//primeira rota
app.get('/test', (req, res) => {
  //o certo é colocar return
  return res.send('Ola!')
})

app.post('/test-post', (req, res) => {
  return res.send('Metodo post')
})

app.listen(3000, () => console.log('Server is running!!'))


