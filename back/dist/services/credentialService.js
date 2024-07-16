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
exports.validateCredentialsServer = exports.loginUserService = void 0;
const CredentialRepositori_1 = __importDefault(require("../repositories/CredentialRepositori"));
const loginUserService = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const newLogin = CredentialRepositori_1.default.create(loginData);
    yield CredentialRepositori_1.default.save(newLogin);
    return { login: newLogin };
});
exports.loginUserService = loginUserService;
const validateCredentialsServer = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = loginData;
    const foundCredential = yield CredentialRepositori_1.default.findOneBy({
        username: username,
    });
    if (!foundCredential)
        throw Error("Uno de los dos datos es incorrecto");
    if (password !== (foundCredential === null || foundCredential === void 0 ? void 0 : foundCredential.password))
        throw Error("Contraseña incorrecta");
    return foundCredential;
});
exports.validateCredentialsServer = validateCredentialsServer;
