import { MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1631143765208 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",    //nome da tabela que vamos alterar
            new TableColumn({
                name: "password",
                type: "varchar",
                isNullable: true   //permite q os registros anteriores fiquem sem esse novo campo
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password") //tabela e coluna
    }

}
