import { Router } from "express"
import { RefaccionesController } from "../controllers/refacciones"

const route = Router()

route.get('/', RefaccionesController.getAll);
route.get('/actives', RefaccionesController.getActives);
route.get('/tipo/:id', RefaccionesController.getByTipo);
route.get('/:id', RefaccionesController.getById);
route.post('/', RefaccionesController.insert);
route.put('/:id', RefaccionesController.update);

export default route