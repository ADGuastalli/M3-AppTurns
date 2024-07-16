import UserRepositori from "../repositories/UserRepositori";
import { UserDto } from "../dto/UserDto";
import { User } from "../entities/User";
import { loginUserService } from "./credentialService";

export const getUsersService = async (): Promise<User[]> => {
  const users: User[] = await UserRepositori.find({
    relations: ["appointmens", "login"],
  });
  return users;
};

export const idUserService = async (id: number): Promise<User> => {
  const user: User | null = await UserRepositori.findOne({
    where: { id },
    relations: ["appointmens"],
  });
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

export const registerUserService = async (userData: UserDto) => {
  const newUser: User = UserRepositori.create(userData);
  await UserRepositori.save(newUser);
  const { login: newLogin } = await loginUserService({
    username: userData.username,
    password: userData.password,
  });
  newUser.login = newLogin;
  await UserRepositori.save(newUser);
  return newUser;
};

export const findUserById = async (credentialsId: number) => {
  const user: User | null = await UserRepositori.findOneBy({
    login: { credentialsId },
  });
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};
