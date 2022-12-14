"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoServicio_1 = require("../controllers/tipoServicio");
const route = (0, express_1.Router)();
route.get('/', tipoServicio_1.ServiceTypeController.getAll);
route.get('/:id', tipoServicio_1.ServiceTypeController.getById);
route.post('/', tipoServicio_1.ServiceTypeController.insert);
route.put('/:id', tipoServicio_1.ServiceTypeController.update);
exports.default = route;
