import { Request, Response, NextFunction } from 'express';



export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  //verificar se o usuário é admin
  const admin = true;

  if(admin) {
    return next();  //se for admin, segue o fluxo e entra no controller pela rota
  }
  //se não for admin
  //401 - unauthorized
  return response.status(401).json({ message: 'Unauthorized'});
}