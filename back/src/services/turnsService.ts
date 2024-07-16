import UserRepositori from "../repositories/UserRepositori";
import TurnRepositori from "../repositories/TurnRepositori";
import { TurnDto } from "../dto/TurnDto";
import {
  Appointmen,
  appointmentStatus,
  appointmenCoach,
} from "../entities/Turns";

export const getTurnsService = async (): Promise<Appointmen[]> => {
  const turns = await TurnRepositori.find();
  return turns;
};

export const getTurnsByUserIdService = async (
  userId: number
): Promise<Appointmen[] | null> => {
  const turns = await TurnRepositori.find({ where: { userId: userId } });
  return turns || null;
};

export const registerScheduleService = async (
  turnData: TurnDto
): Promise<Appointmen> => {
  const user = await UserRepositori.findOne({ where: { id: turnData.userId } });
  console.log(turnData);
  console.log("User ID:", turnData.userId);
  if (!user) throw Error("Usuario inexistente");

  let coach: appointmenCoach;
  switch (turnData.description.toLowerCase()) {
    case "musculacion":
      coach = appointmenCoach.NICOLAS;
      break;
    case "yoga":
      coach = appointmenCoach.GISELA;
      break;
    case "spinning":
      coach = appointmenCoach.JIMENA;
      break;
    case "crossfit":
      coach = appointmenCoach.MARCOS;
      break;
    default:
      throw new Error("Actividad no reconocida");
  }
  turnData.coach = coach;
  const newTurn = await TurnRepositori.create(turnData);
  newTurn.user = user;

  await TurnRepositori.save(newTurn);
  return newTurn;
};

export const deleteTurnService = async (
  id: number
): Promise<Appointmen | null> => {
  const foundAppointment = await TurnRepositori.findOne({ where: { id: id } });
  if (foundAppointment) {
    foundAppointment.status = appointmentStatus.CACELLED;
    await TurnRepositori.save(foundAppointment);
    return foundAppointment;
  } else {
    throw new Error("Turno no encontrado");
  }
};
