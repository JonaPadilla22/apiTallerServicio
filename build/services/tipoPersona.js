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
exports.TypePersonService = void 0;
const database_1 = require("../database");
//import { isValidUser, isValidUserStatus } from "../utils/valid";
class TypePersonService {
}
exports.TypePersonService = TypePersonService;
_a = TypePersonService;
TypePersonService.getTypes = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM tipo_persona');
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
TypePersonService.getTypeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM tipo_persona WHERE ID_TIPO_PERSONA = ?', [parseInt(id)]);
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
TypePersonService.getTypeStatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT estatus FROM tipo_persona WHERE ID_TIPO_PERSONA = ?', [id]);
    var valid = rows[0]['estatus'];
    if (valid) {
        return valid;
    }
    else {
        return "ERROR";
    }
});
TypePersonService.insertType = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO tipo_persona SET ?', [item]);
    return item;
});
TypePersonService.updateType = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUpdate = yield database_1.connection.query('UPDATE tipo_persona SET ? WHERE ID_TIPO_PERSONA = ?', [item, id]);
    return responseUpdate;
});
