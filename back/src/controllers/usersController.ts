import { Request, Response } from "express";
import {
  findUserById,
  getUsersService,
  idUserService,
  registerUserService,
} from "../services/usersService";

import { validateCredentialsServer } from "../services/credentialService";
import { User } from "../entities/User";
import { Login } from "../entities/Credential";
import { UserDto } from "../dto/UserDto";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const idUser = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const user: User | null = await idUserService(Number(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).send("Usuario no encontradoooo.");
  }
};

export const registerUser = async (
  req: Request<{}, {}, UserDto>,
  res: Response
) => {
  try {
    const { name, ndni, birthdate, email, username, password } = req.body;
    const newUser: User = await registerUserService({
      name,
      ndni,
      birthdate,
      email,
      username,
      password,
    });

    res.status(201).json({ message: "Usuario creado con exito" });
  } catch {
    res.status(400).send("El ingreso de los datos fue incorrecto");
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const loginResult: Login = await validateCredentialsServer({
      username,
      password,
    });
    const user: User | null = await findUserById(loginResult.credentialsId);
    res.status(201).json({ login: true, user });
  } catch {
    res.status(400).send("Los datos ingresados son incorrectos");
  }
};
