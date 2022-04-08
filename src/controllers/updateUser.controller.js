import updateUserService from "../services/updateUser.service";

function updatedUserController(req, res) {
  //Pegar o id especificado na URL da requisição
  const { id } = req.params;

  const { name, email } = req.body;

  const user = updateUserService(id, name, email);

  return res.json(user);
}

export default updatedUserController;
