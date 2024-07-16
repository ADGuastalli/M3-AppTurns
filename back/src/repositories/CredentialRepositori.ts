import { AppDataSource } from "../config/data-source";
import { Login } from "../entities/Credential";

const CredentialRepositori = AppDataSource.getRepository(Login);

export default CredentialRepositori;
