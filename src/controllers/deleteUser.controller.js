import deleteUserService from "../services/deleteUser.service";

function deleteUserController(req, res) {
  const { id } = req.params;

  deleteUserService(id);

  return res.json("User deleted successfully");
}

export default deleteUserController;
