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
exports.deleteTurnService = exports.registerScheduleService = exports.getTurnsByUserIdService = exports.getTurnsService = void 0;
const UserRepositori_1 = __importDefault(require("../repositories/UserRepositori"));
const TurnRepositori_1 = __importDefault(require("../repositories/TurnRepositori"));
const Turns_1 = require("../entities/Turns");
const getTurnsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield TurnRepositori_1.default.find();
    return turns;
});
exports.getTurnsService = getTurnsService;
const getTurnsByUserIdService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield TurnRepositori_1.default.find({ where: { userId: userId } });
    return turns || null;
});
exports.getTurnsByUserIdService = getTurnsByUserIdService;
const registerScheduleService = (turnData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserRepositori_1.default.findOne({ where: { id: turnData.userId } });
    console.log(turnData);
    console.log("User ID:", turnData.userId);
    if (!user)
        throw Error("Usuario inexistente");
    let coach;
    switch (turnData.description.toLowerCase()) {
        case "musculacion":
            coach = Turns_1.appointmenCoach.NICOLAS;
            break;
        case "yoga":
            coach = Turns_1.appointmenCoach.GISELA;
            break;
        case "spinning":
            coach = Turns_1.appointmenCoach.JIMENA;
            break;
        case "crossfit":
            coach = Turns_1.appointmenCoach.MARCOS;
            break;
        default:
            throw new Error("Actividad no reconocida");
    }
    turnData.coach = coach;
    const newTurn = yield TurnRepositori_1.default.create(turnData);
    newTurn.user = user;
    yield TurnRepositori_1.default.save(newTurn);
    return newTurn;
});
exports.registerScheduleService = registerScheduleService;
const deleteTurnService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield TurnRepositori_1.default.findOne({ where: { id: id } });
    if (foundAppointment) {
        foundAppointment.status = Turns_1.appointmentStatus.CACELLED;
        yield TurnRepositori_1.default.save(foundAppointment);
        return foundAppointment;
    }
    else {
        throw new Error("Turno no encontrado");
    }
});
exports.deleteTurnService = deleteTurnService;
