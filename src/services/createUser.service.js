import { users } from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

async function createUserService(email, name, password) {
  //Encriptografa a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  //Cria o novo usuário
  const newUser = {
    email,
    name,
    password: hashedPassword,
    id: uuidv4(),
  };

  //Coloca o novo usuario no array de users
  users.push(newUser);

  return newUser;
}

export default createUserService;
