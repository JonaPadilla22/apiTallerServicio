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
exports.RepairTypeController = void 0;
const tipoRefaccion_1 = require("../services/tipoRefaccion");
class RepairTypeController {
}
exports.RepairTypeController = RepairTypeController;
_a = RepairTypeController;
RepairTypeController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield tipoRefaccion_1.TypeRepairService.getTypeRepairs();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
RepairTypeController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield tipoRefaccion_1.TypeRepairService.getTypeRepairById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
RepairTypeController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield tipoRefaccion_1.TypeRepairService.insertTypeRepair(body);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO", data: response });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
RepairTypeController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield tipoRefaccion_1.TypeRepairService.updateTypeRepair(data, id);
        res.status(201).json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.json(e);
    }
});
