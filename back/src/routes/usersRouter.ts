import { Router } from "express";
import {
  getUsers,
  idUser,
  registerUser,
  loginUser,
} from "../controllers/usersController";

const usersRouter: Router = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", idUser);
usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser);

export default usersRouter;
