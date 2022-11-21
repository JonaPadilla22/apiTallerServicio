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
exports.enviar_mail = void 0;
const nodemailer = require('nodemailer');
require('dotenv').config();
const enviar_mail = (correo, nombre, contra) => __awaiter(void 0, void 0, void 0, function* () {
    let mail_options;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    });
    mail_options = {
        from: process.env.MAILUSER,
        to: correo,
        subject: `Bienvenido ${nombre} a AutoStar Services`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        
                        <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">${nombre}</span> 
                            a AutoStar Services
                        </p>
                    </td>
                </tr>
                <tr bgcolor="#fff">
                    <td style="text-align:center">
                        <p style="color: #000">Contraseña: ${contra}</p>
                    </td>
                </tr>
            </table>
        `
    };
    transporter.sendMail(mail_options, (error) => {
        if (error) {
            console.log(error);
        }
        else {
        }
    });
});
exports.enviar_mail = enviar_mail;
