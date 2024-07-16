"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Turns_1 = require("../entities/Turns");
const Credential_1 = require("../entities/Credential");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    dropSchema: true, //Borrar la BDD
    synchronize: true,
    logging: false,
    entities: [User_1.User, Turns_1.Appointmen, Credential_1.Login],
    subscribers: [],
    migrations: [],
});
