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
exports.ModelController = void 0;
const model_1 = require("../services/model");
const marca_1 = require("../services/marca");
class ModelController {
}
exports.ModelController = ModelController;
_a = ModelController;
ModelController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const modelos = yield model_1.ModelService.getModels();
        const response = [];
        for (let i = 0; i < modelos.length; i++) {
            const brand = yield marca_1.BrandService.getBrandById(modelos[i].ID_MARCA.toString());
            delete modelos[i].ID_MARCA;
            modelos[i].MARCA = brand[0];
            response.push(modelos[i]);
        }
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ModelController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const modelo = yield model_1.ModelService.getModelById(id_get);
        const brand = yield marca_1.BrandService.getBrandById(modelo[0].ID_MARCA.toString());
        delete modelo[0].ID_MARCA;
        modelo[0].MARCA = brand[0];
        res.json(modelo[0]);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ModelController.getByMarca = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const modelo = yield model_1.ModelService.getModelByMarca(id_get);
        res.json(modelo);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ModelController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield model_1.ModelService.insertModel(body);
        res.status(201).json({
            message: "REGISTRADO CON ÉXITO",
            data: response,
        });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
ModelController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield model_1.ModelService.updateModel(data, id);
        res
            .status(201)
            .json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.json(e);
    }
});
