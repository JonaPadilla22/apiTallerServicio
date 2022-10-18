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
exports.ModelService = void 0;
const database_1 = require("../database");
//import { isValidUser, isValidUserStatus } from "../utils/valid";
class ModelService {
}
exports.ModelService = ModelService;
_a = ModelService;
ModelService.getModels = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM modelo_veh');
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
ModelService.getModelById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM modelo_veh WHERE ID_MODELO = ?', [parseInt(id)]);
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
ModelService.getModelStatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT estatus FROM modelo_veh WHERE ID_MODELO = ?', [id]);
    var valid = rows[0]['estatus'];
    if (valid) {
        return valid;
    }
    else {
        return "ERROR";
    }
});
ModelService.insertModel = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO modelo_veh SET ?', [item]);
    return item;
});
ModelService.updateModel = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUpdate = yield database_1.connection.query('UPDATE modelo_veh SET ? WHERE ID_MODELO = ?', [item, id]);
    return responseUpdate;
});
