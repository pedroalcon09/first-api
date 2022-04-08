//Importar o express
import express from "express";

//Importar rotas quando estiverem prontas
import usersRoutes from "./routes/user.routes";

//Definir porta
const port = 3000;

//Instanciar express
const app = express();

//Todo uso da API deve ser em formato JSON
app.use(express.json());

//Passar todas as requisições para rotas
app.use("/users", usersRoutes);

//Criar o listener
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
