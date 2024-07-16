import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

const UserRepositori = AppDataSource.getRepository(User);

export default UserRepositori;
