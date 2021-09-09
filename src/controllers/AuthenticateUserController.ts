import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const {email, password } = request.body;

    //recebendo o service
    const authenticateUserService = new AuthenticateUserService();

    //recebe o token
    const token = await authenticateUserService.execute({
      email, 
      password
    })

    return response.json(token);
  }
}

export { AuthenticateUserController };