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
exports.TypeRepairService = void 0;
const database_1 = require("../database");
//import { isValidUser, isValidUserStatus } from "../utils/valid";
class TypeRepairService {
}
exports.TypeRepairService = TypeRepairService;
_a = TypeRepairService;
TypeRepairService.getTypeRepairs = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM tipo_refaccion');
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
TypeRepairService.getTypeRepairById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM tipo_refaccion WHERE ID_TIPO_REFACCION = ?', [parseInt(id)]);
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
TypeRepairService.getTypeRepairStatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT estatus FROM tipo_refaccion WHERE ID_TIPO_REFACCION = ?', [id]);
    var valid = rows[0]['estatus'];
    if (valid) {
        return valid;
    }
    else {
        return "ERROR";
    }
});
TypeRepairService.insertTypeRepair = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO tipo_refaccion SET ?', [item]);
    return item;
});
TypeRepairService.updateTypeRepair = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUpdate = yield database_1.connection.query('UPDATE tipo_refaccion SET ? WHERE ID_TIPO_REFACCION = ?', [item, id]);
    return responseUpdate;
});
