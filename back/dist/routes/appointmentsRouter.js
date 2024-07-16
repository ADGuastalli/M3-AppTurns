"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnsControllers_1 = require("../controllers/turnsControllers");
const autenticaci_n_1 = __importDefault(require("../middlewares/autenticaci\u00F3n"));
const appointmentsRouter = (0, express_1.Router)();
appointmentsRouter.get("/", turnsControllers_1.getAllsTurns);
appointmentsRouter.get("/:userId", turnsControllers_1.getTurnsByUserId);
appointmentsRouter.post("/schedule", autenticaci_n_1.default, turnsControllers_1.registerSchedule);
appointmentsRouter.put("/cancel/:turnId", turnsControllers_1.deleteTurn);
exports.default = appointmentsRouter;
