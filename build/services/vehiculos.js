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
exports.VehiculosService = void 0;
const database_1 = require("../database");
const usuarios_1 = require("../services/usuarios");
class VehiculosService {
}
exports.VehiculosService = VehiculosService;
_a = VehiculosService;
VehiculosService.getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM consultar_vehiculos');
    let veh = rows.map((r) => {
        return r;
    });
    return veh;
});
VehiculosService.getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM consultar_vehiculos WHERE matricula = ?', [id]);
    let veh = rows.map((r) => {
        return r;
    });
    return veh;
});
VehiculosService.getAllClienteVeh = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM cliente_veh');
    var veh = [];
    for (let i = 0; i < rows.length; i++) {
        const usuario = yield usuarios_1.UsuariosService.getUserById(rows[i].ID_USUARIO.toString());
        delete rows[i].ID_USUARIO;
        rows[i].USUARIO = usuario[0];
        const vehiculo = yield _a.getById(rows[i].MATRICULA.toString());
        delete rows[i].MATRICULA;
        rows[i].VEHICULO = vehiculo[0];
        veh.push(rows[i]);
    }
    return veh;
});
VehiculosService.getAllVehByCliente = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM consultar_vehiculos WHERE id_cliente = ?', [id]);
    let veh = rows.map((r) => {
        return r;
    });
    return veh;
});
VehiculosService.insert = (item, matricula) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO vehiculo SET ?', [item]);
    const response = yield _a.getById(matricula);
    return response[0];
});
VehiculosService.update = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield database_1.connection.query('UPDATE vehiculo SET ? WHERE matricula = ?', [item, id]);
    return responseInsert;
});
VehiculosService.insertClienteVeh = (id, matricula) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO cliente_veh SET id_usuario = ?, matricula = ?', [id, matricula]);
    return { ID: id, MATRICULA: matricula };
});
