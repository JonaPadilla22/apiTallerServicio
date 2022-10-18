import { Router } from "express"
import { ServiceTypeController } from "../controllers/tipoServicio"

const route = Router()

route.get('/', ServiceTypeController.getAll);
route.get('/:id', ServiceTypeController.getById);

route.post('/', ServiceTypeController.insert);
route.put('/:id', ServiceTypeController.update);



export default route