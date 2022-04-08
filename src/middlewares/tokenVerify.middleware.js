import jwt from "jsonwebtoken";

function tokenVerifyMiddleware(req, res, next) {
  //Pegar o token do header da requisição
  let token = req.headers.authorization;

  //Caso token não exista, enviar mensagem
  if (!token) {
    return res.status(401).json({ message: "Missing token authorization" });
  }

  //Aqui ocorre a verificação do token pelo JWT
  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token!" });
    }
    next();
  });
}

export default tokenVerifyMiddleware;
