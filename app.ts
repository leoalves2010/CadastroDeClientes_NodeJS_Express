import express from "express";
import clientsRoutes from "./routes/clientsRoutes";
import db from "./db";
import methodOverride from 'method-override';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(clientsRoutes);

app.set('view engine', 'pug');
app.set('views', './views');

db.sync().then(() => {
    console.log(`Conectado ao banco de dados '${process.env.DB_NAME}' com sucesso!`);
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Servidor iniciado com sucesso na porta ${process.env.PORT}`);
    });
});