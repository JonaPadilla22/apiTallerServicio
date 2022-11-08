import { Router } from "express"
import { ServiciosController } from "../controllers/servicios"

const route = Router()

route.get('/', ServiciosController.getAll);
route.get('/pendientes', ServiciosController.getPendientes);
route.get('/cliente/:id', ServiciosController.getByCliente);
route.get('/vehiculo/:id', ServiciosController.getByVehiculo);
route.get('/tecnico/:id', ServiciosController.getByTecnico);
route.get('/estatus/:id', ServiciosController.getByEstatus);
route.get('/detalle/:id', ServiciosController.getDetalle);
route.get('/actualizacion/usuario/:id', ServiciosController.getActualizacionByUsuario);
route.get('/actualizacion/:id', ServiciosController.getActualizacionByServicio);
route.get('/:id', ServiciosController.getById);

route.post('/', ServiciosController.insert);
route.post('/detalle', ServiciosController.insertDetalle);
route.post('/actualizacion', ServiciosController.insertActualizacion);
route.put('/:id', ServiciosController.update);

export default route