import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("users") //define q a entidade se refere a tabela users
class User {
  //agr defino as colunas
  @PrimaryColumn()
  readonly id: string;  //id apenas para leitura; não pode alterar por outra classe

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    //se o id vier preenchido é pq existe, então faremos alteração, busca, deleção etc.
    //se n vier preenchido é pq estamos criando o usuario
    //para ascessar os atributos de uma classe, usamos o this
    //se for diferente desse id (vier como null, undefined...)
    if(!this.id)  {
      this.id = uuid(); //cria o id
    }  
  }
}

export { User };
