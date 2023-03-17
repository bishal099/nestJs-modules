import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const devConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'bishal',
  password: 'password',
  database: 'nest',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
}