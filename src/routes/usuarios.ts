import { Router } from "express"
import { UsuariosController } from "../controllers/usuarios"


const route = Router()

route.get('/', UsuariosController.getAll);
route.get('/actives', UsuariosController.getActives);
route.get('/clientes', UsuariosController.getClientes);
route.get('/:id', UsuariosController.getById);

route.post('/', UsuariosController.insert);

route.put('/:id', UsuariosController.update);
route.put('/:id/pass/:pass', UsuariosController.updatePassword);
route.post('/actualizarImagen/:id', UsuariosController.updateImagenPerfil);

export default route