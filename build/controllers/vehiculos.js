"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculosController = void 0;
const vehiculos_1 = require("../services/vehiculos");
class VehiculosController {
}
exports.VehiculosController = VehiculosController;
_a = VehiculosController;
VehiculosController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield vehiculos_1.VehiculosService.getAll();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
VehiculosController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield vehiculos_1.VehiculosService.getById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
VehiculosController.getAllClienteVeh = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield vehiculos_1.VehiculosService.getAllClienteVeh();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
VehiculosController.getAllVehByCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield vehiculos_1.VehiculosService.getAllVehByCliente(id);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
VehiculosController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const veh = body;
        const matr = body.MATRICULA;
        const response = yield vehiculos_1.VehiculosService.insert(veh, matr);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO", data: response });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
VehiculosController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield vehiculos_1.VehiculosService.update(data, id);
        res.json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
VehiculosController.insertClienteVeh = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield vehiculos_1.VehiculosService.insertClienteVeh(body.ID_USUARIO, body.MATRICULA);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO", data: response });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
