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
exports.UsuariosController = void 0;
const usuarios_1 = require("../services/usuarios");
const tipoUsuario_1 = require("../services/tipoUsuario");
const tipoPersona_1 = require("../services/tipoPersona");
const sendEmail_1 = require("../utils/sendEmail");
const bcrypt_1 = require("../utils/bcrypt");
var path = require('path');
class UsuariosController {
}
exports.UsuariosController = UsuariosController;
_a = UsuariosController;
UsuariosController.getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield usuarios_1.UsuariosService.getUsers();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
UsuariosController.getByToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response;
        if (req.headers.authorization) {
            const jwtRecibida = req.headers.authorization || "";
            const jwt = jwtRecibida.split(" ").pop();
            response = yield usuarios_1.UsuariosService.getByToken(jwt);
        }
        else {
            response = "";
        }
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
UsuariosController.getActives = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield usuarios_1.UsuariosService.getUsersActive();
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
UsuariosController.getClientes = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield usuarios_1.UsuariosService.getClientes();
        const response = [];
        for (let i = 0; i < clientes.length; i++) {
            const tipo_usuario = yield tipoUsuario_1.UserTypeService.getUserTypeById(clientes[i].ID_TIPO_USUARIO.toString());
            delete clientes[i].ID_TIPO_USUARIO;
            clientes[i].TIPO_USUARIO = tipo_usuario[0];
            if (clientes[i].ID_TIPO_PERSONA != null) {
                const tipo_persona = yield tipoPersona_1.TypePersonService.getTypeById(clientes[i].ID_TIPO_PERSONA.toString());
                delete clientes[i].ID_TIPO_PERSONA;
                clientes[i].TIPO_PERSONA = tipo_persona[0];
            }
            response.push(clientes[i]);
        }
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
UsuariosController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_get = req.params.id;
        const response = yield usuarios_1.UsuariosService.getUserById(id_get);
        res.json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
UsuariosController.insert = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPass = yield (0, bcrypt_1.generatePass)();
        const passEnc = yield (0, bcrypt_1.encrypt)(newPass);
        const user = body;
        user.CONTRA = passEnc;
        const response = yield usuarios_1.UsuariosService.insertUser(user);
        if (response != "CORREO YA REGISTRADO") {
            yield (0, sendEmail_1.enviar_mail)(user.CORREO, user.NOMBRE, newPass);
            res.status(201).json({ message: "REGISTRADO CON ??XITO", data: response });
        }
        else {
            res.status(500).json(response);
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
UsuariosController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield usuarios_1.UsuariosService.updateUser(data, id);
        res.json({ message: "ACTUALIZADO CON ??XITO" });
    }
    catch (e) {
        res.status(500).json(e);
    }
});
UsuariosController.updatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const pass = req.params.pass;
        const newpass = req.body.CONTRA;
        const isPass = yield usuarios_1.UsuariosService.checkUserPassword(pass, id);
        if (!isPass) {
            res.status(304).json({ error: "CONTRASE??A ACTUAL INCORRECTA" });
            return;
        }
        const passEnc = yield (0, bcrypt_1.encrypt)(newpass);
        yield usuarios_1.UsuariosService.updateUserPassword(passEnc, id);
        res.status(201).json({ message: "ACTUALIZADO CON EXITO" });
        // const resp = await UsuariosService.getUserById(id);
        // const user: Usuario = {CORREO: resp[0]['CORREO'], NOMBRE: resp[0]['NOMBRE'], CONTRA: ""};
        // await enviar_mail(user, pass, 2);
        //res.status(201).json({message: "ACTUALIZADO CON EXITO"});
    }
    catch (e) {
        res.status(500).json(e);
    }
});
UsuariosController.updateImagenPerfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.files) {
            const id = req.params.id;
            const file = req.files.file;
            const extFile = path.extname(file.name);
            const img = id + extFile;
            const data = { IMG: img };
            file.mv("files/usuarios/" + id + extFile);
            yield usuarios_1.UsuariosService.updateImg(data, id);
            res.json({ message: "ACTUALIZADO CON ??XITO" });
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
