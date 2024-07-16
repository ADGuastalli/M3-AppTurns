import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointmen } from "../entities/Turns";
import { Login } from "../entities/Credential";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  dropSchema: true, //Borrar la BDD
  synchronize: true,
  logging: false,
  entities: [User, Appointmen, Login],
  subscribers: [],
  migrations: [],
});
