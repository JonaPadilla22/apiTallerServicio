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
exports.BrandController = void 0;
const marca_1 = require("../services/marca");
class BrandController {
}
exports.BrandController = BrandController;
_a = BrandController;
BrandController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield marca_1.BrandService.getBrands();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
BrandController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield marca_1.BrandService.getBrandById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
BrandController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield marca_1.BrandService.insertBrand(body);
        res.status(201).json({ message: "REGISTRADO CON ÉXITO", data: response });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
BrandController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield marca_1.BrandService.updateBrand(data, id);
        res.status(201).json({ message: "ACTUALIZADO CON ÉXITO" });
    }
    catch (e) {
        res.json(e);
    }
});
