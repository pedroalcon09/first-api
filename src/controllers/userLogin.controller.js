import userLoginService from "../services/userLogin.service";

function userLoginController(req, res) {
  //Pegar dados do corpo da req
  const { email, password } = req.body;

  //Executa o service
  const userLogin = userLoginService(email, password);

  //Retorna o login(token)
  return res.json(userLogin);
}

export default userLoginController;
