import listUsersService from "../services/listUsers.service";

function listUsersController(req, res) {
  const users = listUsersService();

  return res.json(users);
}

export default listUsersController;
