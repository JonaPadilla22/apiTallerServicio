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
exports.verified = exports.encrypt = exports.generatePass = void 0;
const bcryptjs_1 = require("bcryptjs");
const generatePass = () => __awaiter(void 0, void 0, void 0, function* () {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
            * str.length + 1);
        pass += str.charAt(char);
    }
    return pass;
});
exports.generatePass = generatePass;
const encrypt = (passPlain) => __awaiter(void 0, void 0, void 0, function* () {
    const passHash = yield (0, bcryptjs_1.hash)(passPlain, 8);
    return passHash;
});
exports.encrypt = encrypt;
const verified = (passPlain, passHash) => __awaiter(void 0, void 0, void 0, function* () {
    const isValid = yield (0, bcryptjs_1.compare)(passPlain, passHash);
    return isValid;
});
exports.verified = verified;
