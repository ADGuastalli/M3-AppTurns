import { Request, Response } from "express";
import {
  deleteTurnService,
  getTurnsService,
  getTurnsByUserIdService,
  registerScheduleService,
} from "../services/turnsService";
import { Appointmen } from "../entities/Turns";
import sendConfirmationEmail from "../services/emailService";
import { findUserById } from "../services/usersService";

export const getAllsTurns = async (req: Request, res: Response) => {
  try {
    const turns: Appointmen[] = await getTurnsService();
    res.status(200).send(turns);
  } catch {
    res.status(404).send("Los turnos no se han encontrado");
  }
};

export const getTurnsByUserId = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const turns = await getTurnsByUserIdService(userId);
    res.status(200).json(turns);
  } catch {
    res.status(400).send("Turno no encontrado");
  }
};

export const registerSchedule = async (req: Request, res: Response) => {
  const { date, time, userId, status, description, coach } = req.body;
  try {
    const newAppointment = await registerScheduleService({
      date,
      time,
      userId,
      status,
      description,
      coach,
    });
    const user = await findUserById(userId);
    sendConfirmationEmail(user.email, { date, time, description, coach });
    res.status(200).json(newAppointment);
  } catch (error) {
    console.log("Error al registrar turno:", error); // Imprimir el error en la consola
    res.status(400).send("Los datos ingresados son incorrectos");
  }
};

export const deleteTurn = async (req: Request, res: Response) => {
  const { turnId } = req.params;
  try {
    const deleteturns = await deleteTurnService(Number(turnId));
    res.status(200).json(deleteturns);
  } catch (error) {
    res.status(404).send("No se puede eliminar el turno, no fue encontrado");
  }
};
