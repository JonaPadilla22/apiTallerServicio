"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarToken = exports.generarToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "llave_secreta";
const generarToken = (id) => {
    const jwt = (0, jsonwebtoken_1.sign)({ id }, JWT_SECRET);
    return jwt;
};
exports.generarToken = generarToken;
const verificarToken = (jwt) => {
    return (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
};
exports.verificarToken = verificarToken;
