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
exports.BrandService = void 0;
const database_1 = require("../database");
//import { isValidUser, isValidUserStatus } from "../utils/valid";
class BrandService {
}
exports.BrandService = BrandService;
_a = BrandService;
BrandService.getBrands = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM marca');
    let brand = rows.map((r) => {
        return r;
    });
    return brand;
});
BrandService.getBrandById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM marca WHERE ID_MARCA = ?', [id]);
    let brand = rows.map((r) => {
        return r;
    });
    return brand;
});
BrandService.getBrandStatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT estatus FROM marca WHERE ID_MARCA = ?', [id]);
    var valid = rows[0]['estatus'];
    if (valid) {
        return valid;
    }
    else {
        return "ERROR";
    }
});
BrandService.insertBrand = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO marca SET ?', [item]);
    return item;
});
BrandService.updateBrand = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUpdate = yield database_1.connection.query('UPDATE marca SET ? WHERE ID_MARCA = ?', [item, id]);
    return responseUpdate;
});
