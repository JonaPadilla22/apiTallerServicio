"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculos_1 = require("../controllers/vehiculos");
const route = (0, express_1.Router)();
route.get('/', vehiculos_1.VehiculosController.getAll);
route.get('/cliente-veh', vehiculos_1.VehiculosController.getAllClienteVeh);
route.get('/cliente-veh/:id', vehiculos_1.VehiculosController.getAllVehByCliente);
route.get('/:id', vehiculos_1.VehiculosController.getById);
route.post('/', vehiculos_1.VehiculosController.insert);
route.post('/cliente-veh', vehiculos_1.VehiculosController.insertClienteVeh);
route.put('/:id', vehiculos_1.VehiculosController.update);
exports.default = route;
