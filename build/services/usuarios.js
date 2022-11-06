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
exports.UsuariosService = void 0;
const database_1 = require("../database");
//import { isValidUser, isValidUserStatus } from "../utils/valid";
class UsuariosService {
}
exports.UsuariosService = UsuariosService;
_a = UsuariosService;
UsuariosService.getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM consultar_usuarios');
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
UsuariosService.getClientes = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM usuario WHERE estatus = "A" AND id_tipo_usuario = 4');
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
UsuariosService.getUsersActive = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM consultar_usuarios WHERE estatus = "A"');
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
UsuariosService.getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM consultar_usuarios WHERE id = ?', [id]);
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
UsuariosService.getUserStatus = (correo) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT estatus FROM usuario WHERE id_usuario = ?', [correo]);
    var valid = rows[0]['estatus'];
    if (valid) {
        return valid;
    }
    else {
        return "ERROR";
    }
});
UsuariosService.insertUser = (item) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT COUNT(*) FROM usuario WHERE correo = ?', [item.CORREO]);
    var count = rows[0]['COUNT(*)'];
    if (count == 0) {
        yield database_1.connection.query('INSERT INTO usuario SET ?', [item]);
        console.log(item);
        return item;
    }
    else {
        return "CORREO YA REGISTRADO";
    }
});
UsuariosService.updateUser = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield database_1.connection.query('UPDATE usuario SET ? WHERE id_usuario = ?', [item, id]);
    return responseInsert;
});
UsuariosService.updateUserPassword = (pass, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield database_1.connection.query('UPDATE usuario SET contra = ? WHERE id_usuario = ?', [pass, id]);
    return responseInsert;
});
UsuariosService.updateImg = (ruta, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield database_1.connection.query('UPDATE usuario SET ? WHERE id_usuario = ?', [ruta, id]);
    return responseInsert;
});
