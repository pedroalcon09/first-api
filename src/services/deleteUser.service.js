import { users } from "../database";

function deleteUserService(id) {
  const userIndex = users.findIndex((elem) => elem.id === id);

  if (userIndex === -1) {
    return "User not found!";
  }

  users.splice(userIndex, 1);

  return "User deleted successfully!";
}

export default deleteUserService;
