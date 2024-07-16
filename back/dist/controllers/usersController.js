"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = exports.idUser = exports.getUsers = void 0;
const usersService_1 = require("../services/usersService");
const credentialService_1 = require("../services/credentialService");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersService_1.getUsersService)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getUsers = getUsers;
const idUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, usersService_1.idUserService)(Number(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).send("Usuario no encontradoooo.");
    }
});
exports.idUser = idUser;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, ndni, birthdate, email, username, password } = req.body;
        const newUser = yield (0, usersService_1.registerUserService)({
            name,
            ndni,
            birthdate,
            email,
            username,
            password,
        });
        res.status(201).json({ message: "Usuario creado con exito" });
    }
    catch (_a) {
        res.status(400).send("El ingreso de los datos fue incorrecto");
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const loginResult = yield (0, credentialService_1.validateCredentialsServer)({
            username,
            password,
        });
        const user = yield (0, usersService_1.findUserById)(loginResult.credentialsId);
        res.status(201).json({ login: true, user });
    }
    catch (_b) {
        res.status(400).send("Los datos ingresados son incorrectos");
    }
});
exports.loginUser = loginUser;
