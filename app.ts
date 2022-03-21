import express from "express";
import clientsRoutes from "./routes/clientsRoutes";

const app = express();
const port = 3000;

app.use(clientsRoutes);

app.listen(port, () => {
    console.log(`Servidor iniciado com sucesso na porta ${port}`);
});