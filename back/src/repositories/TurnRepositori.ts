import { AppDataSource } from "../config/data-source";
import { Appointmen } from "../entities/Turns";

const TurnRepositori = AppDataSource.getRepository(Appointmen);

export default TurnRepositori;
