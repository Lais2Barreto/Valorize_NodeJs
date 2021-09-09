import { getCustomRepository } from 'typeorm'; //instancia o repositorio
import { UsersRepositories } from '../repositories/UsersRepositories'
import { hash } from "bcryptjs";  //método q pega a senha e gera hash pra ela (criptografia)

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  //desestruturação de interface
  async execute( { name, email, admin, password } :IUserRequest ) {
    //1º verificar se ja tem usuario cadastrado com tal email
    const usersRepository = getCustomRepository(UsersRepositories);
    /* new UsersRepositories(); não faço assim pois estou usando um
    repositorio customizado */
/* 
    console.log('Email: ', email) */
    //se não tiver email vindo -> lança exceção 
    if(!email) {
      throw new Error("Incorrect email")
    }

    const userAlreadyExists = await usersRepository.findOne({email});
  
    if(userAlreadyExists) {
      throw new Error('User already exists');
    }

    //antes de criar nosso repositorio com as informações do usuario, criptografamos a senha
    //recebe duas coisas: a senha, e o salt (tipo de criptografia - tamanho 8 padrao)
    //como espera uma promise, coloco o await
    const passwordHash = await hash(password, 8)


    //se o usuario não existir, vamos salvar o usuario no bd
    //2 processos: criar instancia do objeto
    //nao precisa ser assincrono
    const user = usersRepository.create({
      name,
      email,
      admin, 
      password: passwordHash,     //nome do campo e o valor q vamos atribuir a ele
    });

    //dps do objeto criado, salva esse user q acabamos de criar
    await usersRepository.save(user);

    return user; //para podermos recuperar depois
  }
}

export { CreateUserService }