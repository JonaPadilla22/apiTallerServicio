import { Router } from "express"
import { ModelController } from "../controllers/modelo"

const route = Router()

route.get('/', ModelController.getAll);
route.get('/:id', ModelController.getById);

route.post('/', ModelController.insert);
route.put('/:id', ModelController.update);

export default route