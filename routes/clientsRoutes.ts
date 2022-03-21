import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('<h1>Página Inicial - Home</h1>');
});

export default router;