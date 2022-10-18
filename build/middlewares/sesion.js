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
exports.revisarSesion = void 0;
const usuarios_1 = require("../services/usuarios");
const jwt_1 = require("../utils/jwt");
const revisarSesion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jwtRecibida = req.headers.authorization || "";
        const jwt = jwtRecibida.split(" ").pop();
        const sesion = (0, jwt_1.verificarToken)(`${jwt}`);
        if (sesion) {
            var obj = JSON.parse(JSON.stringify(sesion));
            let estatus = yield usuarios_1.UsuariosService.getUserStatus(obj['id']);
            if (estatus == 'A') {
                //const user = await UsuariosService.getUserById(obj['id']);
                //console.log(user[0].TIPO_USUARIO.ID);
                next();
            }
            else {
                res.status(401);
                res.send("SESION INVALIDA");
            }
        }
        else {
            res.status(401);
            res.send("SESION INVALIDA");
        }
    }
    catch (e) {
        res.status(400);
        res.send("SESION INVALIDA");
    }
});
exports.revisarSesion = revisarSesion;
