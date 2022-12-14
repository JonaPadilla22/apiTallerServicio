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
exports.ServiciosService = void 0;
const tipoServicio_1 = require("./tipoServicio");
const manoDeObra_1 = require("./manoDeObra");
const usuarios_1 = require("./usuarios");
const database_1 = require("../database");
const refacciones_1 = require("./refacciones");
const vehiculos_1 = require("./vehiculos");
class ServiciosService {
}
exports.ServiciosService = ServiciosService;
_a = ServiciosService;
ServiciosService.getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const [servicios] = yield database_1.connection.query('SELECT * FROM servicio');
    const response = [];
    for (let i = 0; i < servicios.length; i++) {
        const tipoServ = yield tipoServicio_1.ServiceTypeService.getServiceById(servicios[i].ID_TIPO_SERVICIO.toString());
        delete servicios[i].ID_TIPO_SERVICIO;
        servicios[i].TIPO_SERVICIO = tipoServ[0];
        const veh = yield vehiculos_1.VehiculosService.getById(servicios[i].MATRICULA.toString());
        delete servicios[i].MATRICULA;
        servicios[i].VEHICULO = veh[0];
        const estatus = yield _a.getEstatus(servicios[i].ID_ESTATUS.toString());
        delete servicios[i].ID_ESTATUS;
        servicios[i].ESTATUS = estatus[0];
        const cliente = yield usuarios_1.UsuariosService.getUserById(servicios[i].CLIENTE.toString());
        delete servicios[i].CLIENTE;
        servicios[i].CLIENTE = cliente[0];
        if (servicios[i].TECNICO_ENCARGADO != null) {
            const tecnico = yield usuarios_1.UsuariosService.getUserById(servicios[i].TECNICO_ENCARGADO.toString());
            delete servicios[i].TECNICO_ENCARGADO;
            servicios[i].TECNICO_ENCARGADO = tecnico[0];
        }
        response.push(servicios[i]);
    }
    return response;
});
ServiciosService.getPendientes = () => __awaiter(void 0, void 0, void 0, function* () {
    const [servicios] = yield database_1.connection.query('SELECT * FROM servicio WHERE id_estatus = "E" OR id_estatus = "I" OR id_estatus = "R" OR id_estatus = "S"');
    const response = [];
    for (let i = 0; i < servicios.length; i++) {
        const tipoServ = yield tipoServicio_1.ServiceTypeService.getServiceById(servicios[i].ID_TIPO_SERVICIO.toString());
        delete servicios[i].ID_TIPO_SERVICIO;
        servicios[i].TIPO_SERVICIO = tipoServ[0];
        const veh = yield vehiculos_1.VehiculosService.getById(servicios[i].MATRICULA.toString());
        delete servicios[i].MATRICULA;
        servicios[i].VEHICULO = veh[0];
        const estatus = yield _a.getEstatus(servicios[i].ID_ESTATUS.toString());
        delete servicios[i].ID_ESTATUS;
        servicios[i].ESTATUS = estatus[0];
        const cliente = yield usuarios_1.UsuariosService.getUserById(servicios[i].CLIENTE.toString());
        delete servicios[i].CLIENTE;
        servicios[i].CLIENTE = cliente[0];
        if (servicios[i].TECNICO_ENCARGADO != null) {
            const tecnico = yield usuarios_1.UsuariosService.getUserById(servicios[i].TECNICO_ENCARGADO.toString());
            delete servicios[i].TECNICO_ENCARGADO;
            servicios[i].TECNICO_ENCARGADO = tecnico[0];
        }
        response.push(servicios[i]);
    }
    return response;
});
ServiciosService.getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [servicios] = yield database_1.connection.query('SELECT * FROM servicio WHERE id_servicio = ?', [id]);
    const response = [];
    for (let i = 0; i < servicios.length; i++) {
        const tipoServ = yield tipoServicio_1.ServiceTypeService.getServiceById(servicios[i].ID_TIPO_SERVICIO.toString());
        delete servicios[i].ID_TIPO_SERVICIO;
        servicios[i].TIPO_SERVICIO = tipoServ[0];
        const veh = yield vehiculos_1.VehiculosService.getById(servicios[i].MATRICULA.toString());
        delete servicios[i].MATRICULA;
        servicios[i].VEHICULO = veh[0];
        const estatus = yield _a.getEstatus(servicios[i].ID_ESTATUS.toString());
        delete servicios[i].ID_ESTATUS;
        servicios[i].ESTATUS = estatus[0];
        const cliente = yield usuarios_1.UsuariosService.getUserById(servicios[i].CLIENTE.toString());
        delete servicios[i].CLIENTE;
        servicios[i].CLIENTE = cliente[0];
        if (servicios[i].TECNICO_ENCARGADO != null) {
            const tecnico = yield usuarios_1.UsuariosService.getUserById(servicios[i].TECNICO_ENCARGADO.toString());
            delete servicios[i].TECNICO_ENCARGADO;
            servicios[i].TECNICO_ENCARGADO = tecnico[0];
        }
        response.push(servicios[i]);
    }
    return response;
});
ServiciosService.getByCliente = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [servicios] = yield database_1.connection.query('SELECT * FROM servicio WHERE cliente = ?', [id]);
    const response = [];
    for (let i = 0; i < servicios.length; i++) {
        const tipoServ = yield tipoServicio_1.ServiceTypeService.getServiceById(servicios[i].ID_TIPO_SERVICIO.toString());
        delete servicios[i].ID_TIPO_SERVICIO;
        servicios[i].TIPO_SERVICIO = tipoServ[0];
        delete servicios[i].CLIENTE;
        const veh = yield vehiculos_1.VehiculosService.getById(servicios[i].MATRICULA.toString());
        delete servicios[i].MATRICULA;
        servicios[i].VEHICULO = veh[0];
        const estatus = yield _a.getEstatus(servicios[i].ID_ESTATUS.toString());
        delete servicios[i].ID_ESTATUS;
        servicios[i].ESTATUS = estatus[0];
        if (servicios[i].TECNICO_ENCARGADO != null) {
            const tecnico = yield usuarios_1.UsuariosService.getUserById(servicios[i].TECNICO_ENCARGADO.toString());
            delete servicios[i].TECNICO_ENCARGADO;
            servicios[i].TECNICO_ENCARGADO = tecnico[0];
        }
        response.push(servicios[i]);
    }
    return response;
});
ServiciosService.getByVehiculo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [servicios] = yield database_1.connection.query('SELECT * FROM servicio WHERE matricula = ?', [id]);
    const response = [];
    for (let i = 0; i < servicios.length; i++) {
        const tipoServ = yield tipoServicio_1.ServiceTypeService.getServiceById(servicios[i].ID_TIPO_SERVICIO.toString());
        delete servicios[i].ID_TIPO_SERVICIO;
        servicios[i].TIPO_SERVICIO = tipoServ[0];
        const estatus = yield _a.getEstatus(servicios[i].ID_ESTATUS.toString());
        delete servicios[i].ID_ESTATUS;
        servicios[i].ESTATUS = estatus[0];
        if (servicios[i].TECNICO_ENCARGADO != null) {
            const tecnico = yield usuarios_1.UsuariosService.getUserById(servicios[i].TECNICO_ENCARGADO.toString());
            delete servicios[i].TECNICO_ENCARGADO;
            servicios[i].TECNICO_ENCARGADO = tecnico[0];
        }
        response.push(servicios[i]);
    }
    return response;
});
ServiciosService.getByTecnico = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [servicios] = yield database_1.connection.query('SELECT * FROM servicio WHERE tecnico_encargado = ?', [id]);
    const response = [];
    for (let i = 0; i < servicios.length; i++) {
        const tipoServ = yield tipoServicio_1.ServiceTypeService.getServiceById(servicios[i].ID_TIPO_SERVICIO.toString());
        delete servicios[i].ID_TIPO_SERVICIO;
        servicios[i].TIPO_SERVICIO = tipoServ[0];
        const veh = yield vehiculos_1.VehiculosService.getById(servicios[i].MATRICULA.toString());
        delete servicios[i].MATRICULA;
        servicios[i].VEHICULO = veh[0];
        const estatus = yield _a.getEstatus(servicios[i].ID_ESTATUS.toString());
        delete servicios[i].ID_ESTATUS;
        servicios[i].ESTATUS = estatus[0];
        const cliente = yield usuarios_1.UsuariosService.getUserById(servicios[i].CLIENTE.toString());
        delete servicios[i].CLIENTE;
        servicios[i].CLIENTE = cliente[0];
        delete servicios[i].TECNICO_ENCARGADO;
        response.push(servicios[i]);
    }
    return response;
});
ServiciosService.getByEstatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [servicios] = [];
    if (id == "T") {
        [servicios] = yield database_1.connection.query('SELECT s.*, a.FECHA as "FECHA_TERMINO" FROM servicio s, actualizacion_servicio a WHERE a.ID_SERVICIO = s.ID_SERVICIO AND s.id_estatus = ? AND a.ID_ESTATUS = ?', [id, id]);
    }
    else {
        [servicios] = yield database_1.connection.query('SELECT * FROM servicio WHERE id_estatus = ?', [id]);
    }
    const response = [];
    for (let i = 0; i < servicios.length; i++) {
        const tipoServ = yield tipoServicio_1.ServiceTypeService.getServiceById(servicios[i].ID_TIPO_SERVICIO.toString());
        delete servicios[i].ID_TIPO_SERVICIO;
        servicios[i].TIPO_SERVICIO = tipoServ[0];
        const veh = yield vehiculos_1.VehiculosService.getById(servicios[i].MATRICULA.toString());
        delete servicios[i].MATRICULA;
        servicios[i].VEHICULO = veh[0];
        const cliente = yield usuarios_1.UsuariosService.getUserById(servicios[i].CLIENTE.toString());
        delete servicios[i].CLIENTE;
        servicios[i].CLIENTE = cliente[0];
        if (servicios[i].TECNICO_ENCARGADO != null) {
            const tecnico = yield usuarios_1.UsuariosService.getUserById(servicios[i].TECNICO_ENCARGADO.toString());
            delete servicios[i].TECNICO_ENCARGADO;
            servicios[i].TECNICO_ENCARGADO = tecnico[0];
        }
        response.push(servicios[i]);
    }
    return response;
});
ServiciosService.insert = (item) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT COUNT(*) FROM servicio WHERE matricula = ? AND (ID_ESTATUS = "I" OR ID_ESTATUS = "E" OR ID_ESTATUS = "R" OR ID_ESTATUS = "S")', [item.MATRICULA]);
    var count = rows[0]['COUNT(*)'];
    if (count == 0) {
        yield database_1.connection.query('INSERT INTO servicio SET ?', [item]);
        const id_reg = yield database_1.connection.query('SELECT ID_SERVICIO from servicio ORDER BY id_servicio DESC LIMIT 1');
        const response = yield _a.getById(id_reg[0][0]['ID_SERVICIO']);
        return response[0];
    }
    else {
        return "VEHICULO SE ENCUENTRA EN TALLER";
    }
});
ServiciosService.update = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield database_1.connection.query('UPDATE servicio SET ? WHERE id_servicio = ?', [item, id]);
    return responseInsert;
});
ServiciosService.insertDetalle = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield database_1.connection.query('SELECT * FROM detalle_servicio WHERE id_servicio = ? AND id_producto = ? AND tipo_prod = ?', [item.ID_SERVICIO, item.ID_PRODUCTO, item.TIPO_PROD]);
    if (res[0][0]) {
        yield database_1.connection.query('UPDATE detalle_servicio SET cantidad = cantidad + ? WHERE id_servicio = ? AND id_producto = ? AND tipo_prod = ?', [item.CANTIDAD, item.ID_SERVICIO, item.ID_PRODUCTO, item.TIPO_PROD]);
    }
    else {
        yield database_1.connection.query('INSERT INTO detalle_servicio SET ?', [item]);
    }
    if (item.TIPO_PROD == "R") {
        yield database_1.connection.query('UPDATE refaccion SET stock = stock - ? WHERE id_refaccion = ?', [item.CANTIDAD, item.ID_PRODUCTO]);
    }
    //await connection.query('INSERT INTO detalle_servicio SET ?', [item]);
    return item;
});
ServiciosService.getDetalleServicio = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [detalle] = yield database_1.connection.query('SELECT * FROM detalle_servicio WHERE id_servicio = ?', [id]);
    const response = [];
    for (let i = 0; i < detalle.length; i++) {
        if (detalle[i].TIPO_PROD.toString() == "M") {
            const prod = yield manoDeObra_1.ManoDeObraService.getWorkforceById(detalle[i].ID_PRODUCTO.toString());
            delete detalle[i].ID_PRODUCTO;
            detalle[i].PRODUCTO = prod[0];
        }
        else if (detalle[i].TIPO_PROD.toString() == "R") {
            const prod = yield refacciones_1.RefaccionesService.getById(detalle[i].ID_PRODUCTO.toString());
            delete detalle[i].ID_PRODUCTO;
            detalle[i].PRODUCTO = prod[0];
        }
        response.push(detalle[i]);
    }
    return response;
});
ServiciosService.getAllEstatus = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM estatus');
    let estatus = rows.map((r) => {
        return r;
    });
    return estatus;
});
ServiciosService.getEstatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM estatus WHERE ID_ESTATUS = ?', [id]);
    let estatus = rows.map((r) => {
        return r;
    });
    return estatus;
});
ServiciosService.getActualizacionByServicio = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [actualizaciones] = yield database_1.connection.query('SELECT * FROM actualizacion_servicio WHERE id_servicio = ?', [id]);
    const response = [];
    for (let i = 0; i < actualizaciones.length; i++) {
        delete actualizaciones[i].ID_SERVICIO;
        const estatus = yield _a.getEstatus(actualizaciones[i].ID_ESTATUS.toString());
        delete actualizaciones[i].ID_ESTATUS;
        actualizaciones[i].ESTATUS = estatus[0];
        const usuario = yield usuarios_1.UsuariosService.getUserById(actualizaciones[i].ID_USUARIO.toString());
        delete actualizaciones[i].ID_USUARIO;
        actualizaciones[i].USUARIO = usuario[0];
        response.push(actualizaciones[i]);
    }
    return response;
});
ServiciosService.getActualizacionByUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [actualizaciones] = yield database_1.connection.query('SELECT * FROM actualizacion_servicio WHERE id_usuario = ?', [id]);
    const response = [];
    for (let i = 0; i < actualizaciones.length; i++) {
        delete actualizaciones[i].ID_USUARIO;
        const estatus = yield _a.getEstatus(actualizaciones[i].ID_ESTATUS.toString());
        delete actualizaciones[i].ID_ESTATUS;
        actualizaciones[i].ESTATUS = estatus[0];
        response.push(actualizaciones[i]);
    }
    return response;
});
ServiciosService.insertActualizacion = (item) => __awaiter(void 0, void 0, void 0, function* () {
    if (item.ID_ESTATUS) {
        let [rows] = yield database_1.connection.query('SELECT COUNT(*) FROM servicio WHERE matricula = ? AND (ID_ESTATUS = "I" OR ID_ESTATUS = "E" OR ID_ESTATUS = "R" OR ID_ESTATUS = "S") AND id_servicio != ?', [item.MATRICULA, item.ID_SERVICIO]);
        var count = rows[0]['COUNT(*)'];
        if (count == 0) {
            yield database_1.connection.query('INSERT INTO actualizacion_servicio SET ?', [item]);
            yield database_1.connection.query('UPDATE servicio SET id_estatus = ? WHERE id_servicio = ?', [item.ID_ESTATUS, item.ID_SERVICIO]);
            return item;
        }
        else {
            return "VEHICULO SE ENCUENTRA EN TALLER";
        }
    }
});
