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
exports.deleteTurn = exports.registerSchedule = exports.getTurnsByUserId = exports.getAllsTurns = void 0;
const turnsService_1 = require("../services/turnsService");
const emailService_1 = __importDefault(require("../services/emailService"));
const usersService_1 = require("../services/usersService");
const getAllsTurns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turns = yield (0, turnsService_1.getTurnsService)();
        res.status(200).send(turns);
    }
    catch (_a) {
        res.status(404).send("Los turnos no se han encontrado");
    }
});
exports.getAllsTurns = getAllsTurns;
const getTurnsByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.userId);
        const turns = yield (0, turnsService_1.getTurnsByUserIdService)(userId);
        res.status(200).json(turns);
    }
    catch (_b) {
        res.status(400).send("Turno no encontrado");
    }
});
exports.getTurnsByUserId = getTurnsByUserId;
const registerSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, userId, status, description, coach } = req.body;
    try {
        const newAppointment = yield (0, turnsService_1.registerScheduleService)({
            date,
            time,
            userId,
            status,
            description,
            coach,
        });
        const user = yield (0, usersService_1.findUserById)(userId);
        (0, emailService_1.default)(user.email, { date, time, description, coach });
        res.status(200).json(newAppointment);
    }
    catch (error) {
        console.log("Error al registrar turno:", error); // Imprimir el error en la consola
        res.status(400).send("Los datos ingresados son incorrectos");
    }
});
exports.registerSchedule = registerSchedule;
const deleteTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { turnId } = req.params;
    try {
        const deleteturns = yield (0, turnsService_1.deleteTurnService)(Number(turnId));
        res.status(200).json(deleteturns);
    }
    catch (error) {
        res.status(404).send("No se puede eliminar el turno, no fue encontrado");
    }
});
exports.deleteTurn = deleteTurn;
