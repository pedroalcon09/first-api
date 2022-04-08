import createUserService from "../services/createUser.service";

async function createUserController(req, res) {
  //Desestrutura dados recebidos da req
  const { email, name, password } = req.body;

  //Executa o service e retorna o retorno dele
  const user = await createUserService(email, name, password);

  return res.json(user);
}

export default createUserController;
