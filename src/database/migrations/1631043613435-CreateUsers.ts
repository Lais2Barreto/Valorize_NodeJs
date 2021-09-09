import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1631043613435 implements MigrationInterface {
    //criando nossa tabela de usuarios
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false     //se não passar informação, não salva o user como admin
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"       //pega a hora q criar o objeto
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
