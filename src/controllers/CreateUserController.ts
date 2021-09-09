import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

  //define as tipagens (typescript)
  async handle(request: Request, response: Response) {
    //precisamos recuperar as informações do user (la do CreateUserService)
    //de dentro da nossa requisição

    //fazemos desestruturação  do json pra pegar esses dados
      const {name, email, admin, password } = request.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({name, email, admin, password });
      
      return response.json(user);

    
  }
}

export { CreateUserController }