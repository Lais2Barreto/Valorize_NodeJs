import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"; //método para comparar duas senhas
import { sign } from 'jsonwebtoken';
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  //recebe email e password para autenticar
  //desestruturação 
  async execute( { email, password }: IAuthenticateRequest) {
    //verificar se email existente
    //para isso, pegamos o repositorio para dar o findOne
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });
    
    //se email não existir
    if(!user) {
      throw new Error("Email/Password incorrect")  
      //para pessoas maliciosas ficarem na duvida se é email ou senha incorreto (+ segurança)
    }

    //se email existir, verificar se senha está correta
    const passwordMatch = await compare(password, user.password)

    //se o valor retornado for falso
    if(!passwordMatch) {
      throw new Error("Email/Password incorrect")  //retorna o mesmo erro
    }
    //se tudo ok, gerar token
    //primeiro parametro: payload; segundo: secret (colocado em env); terceiro: id do user e tempo de expiração do token
    const token = sign({
      email: user.email,
    }, process.env.SECRET_KEY, {
      subject: user.id,
      expiresIn: "1d"   //1 dia
    })

    return token;
  }
}

export { AuthenticateUserService};