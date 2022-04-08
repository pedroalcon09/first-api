import { users } from "../database";

function checkEmailAvailabilityMiddleware(req, res, next) {
  const { email } = req.body;

  const userAlreadyExist = users.find((user) => user.email === email);

  if (userAlreadyExist) {
    return res
      .status(400)
      .json({ message: "This e-mail already has an account" });
  }

  next();
}

export default checkEmailAvailabilityMiddleware;
