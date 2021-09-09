import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

//como é só o campo name que vamos receber aqui, podemos passar direto
//ali no execute, sem ter q criar a interface
//(o id é gerado pelo uuid e createdat e udpdatedat pelo orm)


class CreateTagService {
  async execute(name:string) {
    //criar referencia do nosso repositorio
    const tagsRepositories = getCustomRepository(TagsRepositories);

    //Não é permitido cadastrar tag sem nome
    if(!name) {
      throw new Error("The tag must have a name")
    }

    //Não é permitido cadastrar mais de uma tag com o mesmo nome
    //espera busca no banco de dados
    //findoOne equivale a SELECT * FROM TAGS WHERE NAME = 'name'
    const tagAlreadyExists = await tagsRepositories.findOne({ name })
    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }
    //se não existir, criamos, salvando a informação
    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService }