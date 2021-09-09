import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";


class CreateTagController {
  async handle(request: Request, response: Response) {
    const {name} = request.body; 
    //desestruturação, pra n ter q fazer: 
    //const data = request.body;
    //data.name
    const createTagService = new CreateTagService();

    const tag = await createTagService.execute(name);

    return response.json(tag)
  }
}

export { CreateTagController }
