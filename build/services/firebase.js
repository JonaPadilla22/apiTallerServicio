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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const database_1 = require("../database");
const firebase_config_1 = __importDefault(require("../firebase-config"));
const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24,
};
class FirebaseService {
}
exports.FirebaseService = FirebaseService;
_a = FirebaseService;
FirebaseService.registerTokenUser = (item) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.query('SELECT COUNT(*) FROM token_usuario WHERE token = ?', [item.TOKEN]);
    var count = rows[0]['COUNT(*)'];
    if (count == 0) {
        yield database_1.connection.query('INSERT INTO token_usuario SET ?', [item]);
        return "TOKEN REGISTRADO";
    }
    else {
        return "TOKEN PREVIAMENTE REGISTRADO";
    }
});
FirebaseService.deleteToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('DELETE FROM token_usuario WHERE token = ?', [token]);
    return "ELIMINADO CORRECTAMENTE";
});
FirebaseService.sendNotificationUser = (id, notification) => __awaiter(void 0, void 0, void 0, function* () {
    //obtener tokens de id usuario
    let [rows] = yield database_1.connection.query('SELECT token FROM token_usuario WHERE id_usuario = ?', [id]);
    let tokens = rows.map((r) => {
        return r;
    });
    //ASIGNA MENSAJE DE NOTIFICACION ENVIADO
    const message_notification = {
        notification: notification
    };
    const options = notification_options;
    //ciclo de cada token hacer el envio de la notif
    for (var z = 0; z < tokens.length; z++) {
        firebase_config_1.default
            .messaging()
            .sendToDevice(tokens[z].token, message_notification, options);
    }
    // .then((response: any) => {
    //     res
    //     .status(200)
    //     .send(
    //         `Notification sent successfully ${response.data}`
    //     );
    // })
    // .catch((error: any) => {
    //     console.log(error);
    // }); 
});
