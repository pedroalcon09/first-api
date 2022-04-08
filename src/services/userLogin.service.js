import { users } from "../database";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

function userLoginService(email, password) {
  //Achar o usuário referido pelos inputs no banco de dados
  const user = users.find((elem) => elem.email === email);

  //Caso nenhum usuário tenha sido encontrado, retornar msg
  if (!user) {
    return "Invalid e-mail or password!";
  }

  //Checar a correspondencia das duas senhas
  const passwordMatch = bcrypt.compareSync(password, user.password);

  //Caso a senha não de match
  if (!passwordMatch) {
    return "Invalid e-mail or password!";
  }

  //Gerar o token com email, SECRET_KEY e tempo de expiração
  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return token;
}

export default userLoginService;
