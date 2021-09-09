import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid } from "uuid"; //vai fazer o id; esse v4 produz numeros aleatorios

@Entity("tags")
class Tag {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  //qm coloca o id é o construtor
  constructor() {
    if(!this.id) {
      //se n estiver preenchido, eu preencho com o uuid
      this.id = uuid();
    }
  }
}

export { Tag };