import { Router } from "express"
import { TypePersonController } from "../controllers/tipoPersona"

const route = Router()

route.get('/', TypePersonController.getAll);
route.get('/:id', TypePersonController.getById);

route.post('/', TypePersonController.insert);
route.put('/:id', TypePersonController.update);



export default route