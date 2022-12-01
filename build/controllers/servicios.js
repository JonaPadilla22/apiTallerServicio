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
exports.ServiciosController = void 0;
const servicios_1 = require("../services/servicios");
class ServiciosController {
}
exports.ServiciosController = ServiciosController;
_a = ServiciosController;
ServiciosController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield servicios_1.ServiciosService.getAll();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.getEstatus = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield servicios_1.ServiciosService.getAllEstatus();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.getPendientes = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield servicios_1.ServiciosService.getPendientes();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield servicios_1.ServiciosService.getById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.getByCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield servicios_1.ServiciosService.getByCliente(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.getByVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield servicios_1.ServiciosService.getByVehiculo(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.getByTecnico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield servicios_1.ServiciosService.getByTecnico(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.getByEstatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield servicios_1.ServiciosService.getByEstatus(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const veh = body;
        const response = yield servicios_1.ServiciosService.insert(veh);
        if (response != "VEHICULO SE ENCUENTRA EN TALLER") {
            res.status(201).json({ message: "REGISTRADO CON ÉXITO", data: response });
        }
        else {
            res.json({ message: "VEHÍCULO SE ENCUENTRA EN TALLER" }).status(204);
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const response = yield servicios_1.ServiciosService.update(data, id);
        if (response != "VEHICULO SE ENCUENTRA EN TALLER") {
            res.status(201).json({ message: "ACTUALIZADO CON ÉXITO", data: response });
        }
        else {
            res.json({ message: "VEHÍCULO SE ENCUENTRA EN TALLER" }).status(204);
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.insertDetalle = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const det = body;
        const response = yield servicios_1.ServiciosService.insertDetalle(det);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO", data: response });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.getDetalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield servicios_1.ServiciosService.getDetalleServicio(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.getActualizacionByServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield servicios_1.ServiciosService.getActualizacionByServicio(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.getActualizacionByUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield servicios_1.ServiciosService.getActualizacionByUsuario(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ServiciosController.insertActualizacion = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield servicios_1.ServiciosService.insertActualizacion(body);
        if (response != "VEHICULO SE ENCUENTRA EN TALLER") {
            res.status(201).json({ message: "ACTUALIZADO CON ÉXITO", data: response });
        }
        else {
            res.json({ message: "VEHÍCULO SE ENCUENTRA EN TALLER" }).status(204);
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
