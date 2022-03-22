import { Router } from "express";
import clientController from "../controllers/clientController";

const router = Router();

router.get('/', clientController.index);
router.get('/client/create', clientController.create);
router.post('/client/create', clientController.createDB);
router.get('/client/:id/edit', clientController.edit);
router.put('/client/:id/edit', clientController.editDB);
router.get('/client/:id', clientController.show);

export default router;