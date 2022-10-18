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
exports.ServiceTypeService = void 0;
const database_1 = require("../database");
//import { isValidUser, isValidUserStatus } from "../utils/valid";
class ServiceTypeService {
}
exports.ServiceTypeService = ServiceTypeService;
_a = ServiceTypeService;
ServiceTypeService.getServices = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM tipo_servicio');
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
ServiceTypeService.getServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM tipo_servicio WHERE ID_TIPO_SERVICIO = ?', [parseInt(id)]);
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
ServiceTypeService.getServiceStatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT estatus FROM tipo_servicio WHERE ID_TIPO_SERVICIO = ?', [id]);
    var valid = rows[0]['estatus'];
    if (valid) {
        return valid;
    }
    else {
        return "ERROR";
    }
});
ServiceTypeService.insertService = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO tipo_servicio SET ?', [item]);
    return item;
});
ServiceTypeService.updateService = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUpdate = yield database_1.connection.query('UPDATE tipo_servicio SET ? WHERE ID_TIPO_SERVICIO = ?', [item, id]);
    return responseUpdate;
});
