import { Router } from "express"
import { RepairTypeController } from "../controllers/tipoRefaccion"

const route = Router()

route.get('/', RepairTypeController.getAll);
route.get('/:id', RepairTypeController.getById);

route.post('/', RepairTypeController.insert);
route.put('/:id', RepairTypeController.update);



export default route