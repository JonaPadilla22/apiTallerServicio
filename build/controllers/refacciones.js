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
exports.RefaccionesController = void 0;
const refacciones_1 = require("../services/refacciones");
class RefaccionesController {
}
exports.RefaccionesController = RefaccionesController;
_a = RefaccionesController;
RefaccionesController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield refacciones_1.RefaccionesService.getAll();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
RefaccionesController.getActives = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield refacciones_1.RefaccionesService.getActives();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
RefaccionesController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield refacciones_1.RefaccionesService.getById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
RefaccionesController.getByTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield refacciones_1.RefaccionesService.getByTipoRef(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
RefaccionesController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const veh = body;
        const response = yield refacciones_1.RefaccionesService.insert(veh);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO", data: response });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
RefaccionesController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield refacciones_1.RefaccionesService.update(data, id);
        res.json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
