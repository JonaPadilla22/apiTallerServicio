
const nodemailer = require('nodemailer');
require('dotenv').config();

const enviar_mail = async (correo: string, nombre: string, contra: string) => {
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
        subject: `Bienvenido ${nombre} a Capacitaciones IMCA`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        
                        <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">${nombre}</span> 
                            a Capacitaciones IMCA
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
    

    transporter.sendMail(mail_options, (error: string) => {
        if (error) {
            console.log(error);
        } else {
            
        }
    });
};

export {enviar_mail}