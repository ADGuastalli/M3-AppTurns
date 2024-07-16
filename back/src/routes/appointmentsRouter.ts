import { Router } from "express";
import {
  deleteTurn,
  getAllsTurns,
  getTurnsByUserId,
  registerSchedule,
} from "../controllers/turnsControllers";
import ValidateAppointment from "../middlewares/autenticación";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAllsTurns);
appointmentsRouter.get("/:userId", getTurnsByUserId);
appointmentsRouter.post("/schedule", ValidateAppointment, registerSchedule);
appointmentsRouter.put("/cancel/:turnId", deleteTurn);

export default appointmentsRouter;
