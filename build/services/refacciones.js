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
exports.RefaccionesService = void 0;
const database_1 = require("../database");
class RefaccionesService {
}
exports.RefaccionesService = RefaccionesService;
_a = RefaccionesService;
RefaccionesService.getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM consultar_refacciones');
    let ref = rows.map((r) => {
        return r;
    });
    return ref;
});
RefaccionesService.getActives = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM consultar_refacciones WHERE estatus = "A"');
    let ref = rows.map((r) => {
        return r;
    });
    return ref;
});
RefaccionesService.getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM consultar_refacciones WHERE id = ?', [id]);
    let ref = rows.map((r) => {
        return r;
    });
    return ref;
});
RefaccionesService.getByTipoRef = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM consultar_refacciones WHERE id_tipo_refaccion = ?', [id]);
    let ref = rows.map((r) => {
        return r;
    });
    return ref;
});
RefaccionesService.insert = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO refaccion SET ?', [item]);
    return item;
});
RefaccionesService.update = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield database_1.connection.query('UPDATE refaccion SET ? WHERE id_refaccion = ?', [item, id]);
    return responseInsert;
});
