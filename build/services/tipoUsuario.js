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
exports.UserTypeService = void 0;
const database_1 = require("../database");
//import { isValidUser, isValidUserStatus } from "../utils/valid";
class UserTypeService {
}
exports.UserTypeService = UserTypeService;
_a = UserTypeService;
UserTypeService.getUserTypes = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM tipo_usuario');
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
UserTypeService.getUserTypeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM tipo_usuario WHERE ID_TIPO_USUARIO = ?', [parseInt(id)]);
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
UserTypeService.getUserTypeStatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT estatus FROM tipo_usuario WHERE ID_TIPO_USUARIO = ?', [id]);
    var valid = rows[0]['estatus'];
    if (valid) {
        return valid;
    }
    else {
        return "ERROR";
    }
});
UserTypeService.insertUserType = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO tipo_usuario SET ?', [item]);
    return item;
});
UserTypeService.updateUserType = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUpdate = yield database_1.connection.query('UPDATE tipo_usuario SET ? WHERE ID_TIPO_USUARIO = ?', [item, id]);
    return responseUpdate;
});
