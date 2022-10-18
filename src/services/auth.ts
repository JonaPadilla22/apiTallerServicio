import { Auth } from "../interfaces/auth";
//import { Usuario } from "../interfaces/usuario";
import { connection } from "../database";
import { verified } from "../utils/bcrypt";
import { generarToken } from "../utils/jwt";

const loginUser = async (item: Auth) => {
 
    let [rows] = await connection.execute('SELECT * FROM usuario_login where correo=?', [item.CORREO]);
    let users = rows.map((r: any) => {
        return r;
    });
    
    if(!users[0]) return "DATOS INVÁLIDOS";
    var obj = JSON.parse(JSON.stringify(users[0]));
    const passHash = obj['CONTRA'];
    const isValid = await verified(item.CONTRA, passHash);

    if(!isValid) return "CONTRASEÑA INCORRECTA";

    const token = generarToken(obj['ID']);
    delete obj['CONTRA'];
    const data = {
        TOKEN: token,
        USUARIO: obj
    }

    return data; 
    
};


export { loginUser };