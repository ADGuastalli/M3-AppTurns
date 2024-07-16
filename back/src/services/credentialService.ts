import CredentialRepositori from "../repositories/CredentialRepositori";

import { CredentialDto } from "../dto/CredentialDto";

import { Login } from "../entities/Credential";
import { ValidateCredentialDto } from "../dto/ValidateCredentialDto";

export const loginUserService = async (
  loginData: CredentialDto
): Promise<{ login: Login }> => {
  const newLogin: Login = CredentialRepositori.create(loginData);
  await CredentialRepositori.save(newLogin);

  return { login: newLogin };
};

export const validateCredentialsServer = async (
  loginData: ValidateCredentialDto
): Promise<Login> => {
  const { username, password } = loginData;
  const foundCredential: Login | null = await CredentialRepositori.findOneBy({
    username: username,
  });
  if (!foundCredential) throw Error("Uno de los dos datos es incorrecto");
  if (password !== foundCredential?.password)
    throw Error("Contraseña incorrecta");
  return foundCredential;
};
