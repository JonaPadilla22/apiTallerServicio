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
exports.ManoDeObraController = void 0;
const manoDeObra_1 = require("../services/manoDeObra");
class ManoDeObraController {
}
exports.ManoDeObraController = ManoDeObraController;
_a = ManoDeObraController;
ManoDeObraController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield manoDeObra_1.ManoDeObraService.getWorkforces();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ManoDeObraController.getActives = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield manoDeObra_1.ManoDeObraService.getWorkforcesActives();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ManoDeObraController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield manoDeObra_1.ManoDeObraService.getWorkforceById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ManoDeObraController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield manoDeObra_1.ManoDeObraService.insertWorkforce(body);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO", data: response });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ManoDeObraController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield manoDeObra_1.ManoDeObraService.updateWorkforce(data, id);
        res.status(201).json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.json(e);
    }
});
