import { Router } from "express";

//Importar controllers
import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updatedUserController from "../controllers/updateUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import deleteUserController from "../controllers/deleteUser.controller";

//Importar middlewares
import checkEmailAvailabilityMiddleware from "../middlewares/checkEmailAvailability.middleware";
import tokenVerifyMiddleware from "../middlewares/tokenVerify.middleware";

//Instanciar o Router
const router = Router();

//Create user
router.post("", checkEmailAvailabilityMiddleware, createUserController);
//Do login
router.post("/login", userLoginController);
//Get users
router.get("", listUsersController);
//Update user
router.put("/:id", tokenVerifyMiddleware, updatedUserController);
//Delete user
router.delete("/:id", tokenVerifyMiddleware, deleteUserController);

/* ----------//---------- */

//Create book

//Get books

//Update book

//Delete book

export default router;
