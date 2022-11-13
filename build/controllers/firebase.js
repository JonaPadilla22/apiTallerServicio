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
exports.FirebaseController = void 0;
const firebase_1 = require("../services/firebase");
class FirebaseController {
}
exports.FirebaseController = FirebaseController;
_a = FirebaseController;
FirebaseController.registerToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const registrationToken = body.token;
        const id = req.params.id;
        const token = req.body.TOKEN;
        const response = yield firebase_1.FirebaseService.registerTokenUser({ ID_USUARIO: id, TOKEN: token });
        res.json(response);
    }
    catch (e) {
        res.send(e);
    }
});
FirebaseController.sendNotifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const registrationToken = body.token;
        const id = req.params.id;
        const notification = req.body.NOTIFICATION;
        yield firebase_1.FirebaseService.sendNotificationUser(id, notification);
        res.json("ENVIADO");
    }
    catch (e) {
        res.send(e);
    }
});
