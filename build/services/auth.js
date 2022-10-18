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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
//import { Usuario } from "../interfaces/usuario";
const database_1 = require("../database");
const bcrypt_1 = require("../utils/bcrypt");
const jwt_1 = require("../utils/jwt");
const loginUser = (item) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM usuario_login where correo=?', [item.CORREO]);
    let users = rows.map((r) => {
        return r;
    });
    if (!users[0])
        return "DATOS INVÁLIDOS";
    var obj = JSON.parse(JSON.stringify(users[0]));
    const passHash = obj['CONTRA'];
    const isValid = yield (0, bcrypt_1.verified)(item.CONTRA, passHash);
    if (!isValid)
        return "CONTRASEÑA INCORRECTA";
    const token = (0, jwt_1.generarToken)(obj['ID']);
    delete obj['CONTRA'];
    const data = {
        TOKEN: token,
        USUARIO: obj
    };
    return data;
});
exports.loginUser = loginUser;
