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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserById = exports.registerUserService = exports.idUserService = exports.getUsersService = void 0;
const UserRepositori_1 = __importDefault(require("../repositories/UserRepositori"));
const credentialService_1 = require("./credentialService");
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserRepositori_1.default.find({
        relations: ["appointmens", "login"],
    });
    return users;
});
exports.getUsersService = getUsersService;
const idUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserRepositori_1.default.findOne({
        where: { id },
        relations: ["appointmens"],
    });
    if (!user)
        throw new Error("Usuario no encontrado");
    return user;
});
exports.idUserService = idUserService;
const registerUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = UserRepositori_1.default.create(userData);
    yield UserRepositori_1.default.save(newUser);
    const { login: newLogin } = yield (0, credentialService_1.loginUserService)({
        username: userData.username,
        password: userData.password,
    });
    newUser.login = newLogin;
    yield UserRepositori_1.default.save(newUser);
    return newUser;
});
exports.registerUserService = registerUserService;
const findUserById = (credentialsId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserRepositori_1.default.findOneBy({
        login: { credentialsId },
    });
    if (!user)
        throw new Error("Usuario no encontrado");
    return user;
});
exports.findUserById = findUserById;
