import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1650717540089 implements MigrationInterface {
  name = 'UserMigration1650717540089';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`parkings\` (\`id\` int NOT NULL AUTO_INCREMENT, \`address\` varchar(255) NOT NULL, \`nbrSpots\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`parkings\``);
  }
}
