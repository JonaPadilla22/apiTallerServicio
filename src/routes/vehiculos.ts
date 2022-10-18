import { Router } from "express"
import { VehiculosController } from "../controllers/vehiculos"

const route = Router()

route.get('/', VehiculosController.getAll);
route.get('/cliente-veh', VehiculosController.getAllClienteVeh);
route.get('/cliente-veh/:id', VehiculosController.getAllVehByCliente);
route.get('/:id', VehiculosController.getById);

route.post('/', VehiculosController.insert);
route.post('/cliente-veh', VehiculosController.insertClienteVeh);
route.put('/:id', VehiculosController.update);

export default route