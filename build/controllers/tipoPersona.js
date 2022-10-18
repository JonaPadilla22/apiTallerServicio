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
exports.TypePersonController = void 0;
const tipoPersona_1 = require("../services/tipoPersona");
class TypePersonController {
}
exports.TypePersonController = TypePersonController;
_a = TypePersonController;
TypePersonController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield tipoPersona_1.TypePersonService.getTypes();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
TypePersonController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield tipoPersona_1.TypePersonService.getTypeById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
TypePersonController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield tipoPersona_1.TypePersonService.insertType(body);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO", data: response });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
TypePersonController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield tipoPersona_1.TypePersonService.updateType(data, id);
        res.status(201).json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.json(e);
    }
});
