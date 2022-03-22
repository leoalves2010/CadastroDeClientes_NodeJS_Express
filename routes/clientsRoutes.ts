import { Router } from "express";
import clientController from "../controllers/clientController";

const router = Router();

router.get('/', clientController.index);
router.get('/client/:id', clientController.show);

export default router;