import { NextFunction, Request, Response } from "express";

const ValidateAppointment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, time } = req.body;

  const appointmentData = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  if (appointmentData < tomorrow) {
    return res.status(400).json({
      error: "La fecha de reserva de turno debe ser posterior al dia de hoy.",
    });
  }

  const dayOfWeek = appointmentData.getDay();
  if (dayOfWeek === 0) {
    return res
      .status(400)
      .json({ error: "Los domingos no son dias laborables." });
  }

  const [hours, minutes] = time.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;

  if (totalMinutes < 8 * 60 || totalMinutes > 19 * 60 + 1) {
    return res
      .status(400)
      .json({ error: "Los turnos solo son de 8 a 19:01 hs." });
  }
  next();
};

export default ValidateAppointment;
