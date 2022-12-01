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
exports.DashboardService = void 0;
const database_1 = require("../database");
//import { isValidUser, isValidUserStatus } from "../utils/valid";
class DashboardService {
}
exports.DashboardService = DashboardService;
_a = DashboardService;
DashboardService.getDashboardGeneral = () => __awaiter(void 0, void 0, void 0, function* () {
    let dashboard = {};
    const [num_clientes] = yield database_1.connection.query('SELECT COUNT(*) AS "NUM_CLIENTES" FROM usuario WHERE ID_TIPO_USUARIO = 4 and ESTATUS = "A"');
    const [num_tecnicos] = yield database_1.connection.query('SELECT COUNT(*) AS "NUM_TECNICOS" FROM usuario WHERE ID_TIPO_USUARIO = 3 and ESTATUS = "A"');
    const [citas_pend] = yield database_1.connection.query('SELECT COUNT(*) AS "CITAS_PENDIENTES" FROM servicio WHERE ID_ESTATUS = "C"');
    const [serv_terminados] = yield database_1.connection.query('SELECT COUNT(*) AS "SERVICIOS_TERMINADOS" FROM servicio WHERE ID_ESTATUS = "T"');
    const [serv_ingreso] = yield database_1.connection.query('SELECT COUNT(*) AS "SERVICIOS_INGRESO" FROM servicio WHERE ID_ESTATUS = "I"');
    const [serv_espera] = yield database_1.connection.query('SELECT COUNT(*) AS "SERVICIOS_ESPERA" FROM servicio WHERE ID_ESTATUS = "E"');
    const [serv_revision] = yield database_1.connection.query('SELECT COUNT(*) AS "SERVICIOS_REVISION" FROM servicio WHERE ID_ESTATUS = "R"');
    const [serv_salida] = yield database_1.connection.query('SELECT COUNT(*) AS "SERVICIOS_SALIDA" FROM servicio WHERE ID_ESTATUS = "S"');
    const [veh_taller] = yield database_1.connection.query('SELECT COUNT(*) AS "VEH_TALLER" FROM servicio WHERE ID_ESTATUS = "I" OR ID_ESTATUS = "E" OR ID_ESTATUS = "R" OR ID_ESTATUS = "S"');
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let [ingresados_hoy] = [];
    if (month < 10) {
        [ingresados_hoy] = yield database_1.connection.query(`SELECT COUNT(*) AS "INGRESADOS_HOY" FROM actualizacion_servicio WHERE ID_ESTATUS = "I" AND (FECHA > \'${year}-0${month}-${day} 00:00:00\' AND FECHA < \'${year}-0${month}-${day} 23:59:59\')`);
    }
    else {
        [ingresados_hoy] = yield database_1.connection.query(`SELECT COUNT(*) AS "INGRESADOS_HOY" FROM actualizacion_servicio WHERE ID_ESTATUS = "I" AND (FECHA > \'${year}-${month}-${day} 00:00:00\' AND FECHA < \'${year}-${month}-${day} 23:59:59\')`);
    }
    dashboard = {
        "NUM_CLIENTES": num_clientes[0]['NUM_CLIENTES'],
        "NUM_TECNICOS": num_tecnicos[0]['NUM_TECNICOS'],
        "CITAS_PENDIENTES": citas_pend[0]['CITAS_PENDIENTES'],
        "SERVICIOS_TERMINADOS": serv_terminados[0]['SERVICIOS_TERMINADOS'],
        "SERVICIOS_INGRESO": serv_ingreso[0]['SERVICIOS_INGRESO'],
        "SERVICIOS_ESPERA": serv_espera[0]['SERVICIOS_ESPERA'],
        "SERVICIOS_REVISION": serv_revision[0]['SERVICIOS_REVISION'],
        "SERVICIOS_SALIDA": serv_salida[0]['SERVICIOS_SALIDA'],
        "VEH_TALLER": veh_taller[0]['VEH_TALLER'],
        "INGRESADOS_HOY": ingresados_hoy[0]['INGRESADOS_HOY'],
    };
    return dashboard;
});
