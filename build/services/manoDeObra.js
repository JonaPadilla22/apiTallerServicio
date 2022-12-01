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
exports.ManoDeObraService = void 0;
const database_1 = require("../database");
//import { isValidUser, isValidUserStatus } from "../utils/valid";
class ManoDeObraService {
}
exports.ManoDeObraService = ManoDeObraService;
_a = ManoDeObraService;
ManoDeObraService.getWorkforces = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM mano_obra');
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
ManoDeObraService.getWorkforcesActives = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM mano_obra WHERE estatus = "A"');
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
ManoDeObraService.getWorkforceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT * FROM mano_obra WHERE ID_MANO_OBRA = ?', [parseInt(id)]);
    let users = rows.map((r) => {
        return r;
    });
    return users;
});
ManoDeObraService.getWorkforceStatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT estatus FROM mano_obra WHERE ID_MANO_OBRA = ?', [id]);
    var valid = rows[0]['estatus'];
    if (valid) {
        return valid;
    }
    else {
        return "ERROR";
    }
});
ManoDeObraService.insertWorkforce = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO mano_obra SET ?', [item]);
    return item;
});
ManoDeObraService.updateWorkforce = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUpdate = yield database_1.connection.query('UPDATE mano_obra SET ? WHERE ID_MANO_OBRA = ?', [item, id]);
    return responseUpdate;
});
