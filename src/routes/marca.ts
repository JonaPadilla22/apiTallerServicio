import { Router } from "express"
import { BrandController } from "../controllers/marca"

const route = Router()

route.get('/', BrandController.getAll);
route.get('/:id', BrandController.getById);

route.post('/', BrandController.insert);
route.put('/:id', BrandController.update);



export default route