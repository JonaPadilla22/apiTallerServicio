import { Usuario } from "../interfaces/usuario";
import { connection } from "../database";
import { verificarToken } from "../utils/jwt";
import { verified } from "../utils/bcrypt";
//import { isValidUser, isValidUserStatus } from "../utils/valid";

class UsuariosService {
    static getUsers = async () => {
        let [rows] = await connection.query('SELECT * FROM consultar_usuarios');
        let users = rows.map((r: any) => {
            return r;
        });
        return users;  
    };

    static getByToken = async (token?: string) => {      
        const sesion = verificarToken(`${token}`);
        var obj = JSON.parse(JSON.stringify(sesion));
            
        return await UsuariosService.getUserById(obj['id']);
    };

    static getClientes = async () => {
        let [rows] = await connection.query('SELECT * FROM usuario WHERE estatus = "A" AND id_tipo_usuario = 4');
        let users = rows.map((r: any) => {
            return r;
        });
        return users;  
    };

    static getUsersActive = async () => {
        let [rows] = await connection.query('SELECT * FROM consultar_usuarios WHERE estatus = "A"');
        let users = rows.map((r: any) => {
            return r;
        });
        return users;  
    };

    static getUserById = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM consultar_usuarios WHERE id = ?',[id]);
        let users = rows.map((r: any) => {
            return r;
        });
        return users;   
    };
    
    static getUserStatus = async (correo: string) => {
        let [rows] = await connection.query('SELECT estatus FROM usuario WHERE id_usuario = ?',[correo]);
        var valid = rows[0]['estatus'];

        if(valid){
            return valid;
        }else{
            return "ERROR";
        }       
    };
    
    static insertUser = async (item: Usuario) => {
        let [rows] = await connection.query('SELECT COUNT(*) FROM usuario WHERE correo = ?',[item.CORREO]);
        var count = rows[0]['COUNT(*)'];

        if(count == 0){      
            const id_reg = await connection.query('INSERT INTO usuario SET ?; SELECT ID_USUARIO from usuario ORDER BY id_usuario DESC LIMIT 1;', [item]);
            const response = await this.getUserById(id_reg[0][1][0].ID_USUARIO.toString());
            return response[0];
        }else{
            return "CORREO YA REGISTRADO"
        }
    };
    
    static updateUser = async (item: Usuario, id: string) => {       
        const responseInsert = await connection.query('UPDATE usuario SET ? WHERE id_usuario = ?', [item, id]);
        return responseInsert;        
    };

    static checkUserPassword = async (pass: string, id: string) => {      
        let [rows] = await connection.execute('SELECT * FROM usuario where id_usuario=?', [id]);
        let users = rows.map((r: any) => {
            return r;
        });
        var obj = JSON.parse(JSON.stringify(users[0]));
        const passHash = obj['CONTRA'];
        return await verified(pass, passHash);      
    };

    static updateUserPassword = async (pass: string, id: string) => {      
        const responseInsert = await connection.query('UPDATE usuario SET contra = ? WHERE id_usuario = ?', [pass, id]);
        return responseInsert;         
    };

    static updateImg = async (ruta: {}, id: string) => {       
        const responseInsert = await connection.query('UPDATE usuario SET ? WHERE id_usuario = ?', [ruta, id]);
        return responseInsert;        
    };
    
}

export { UsuariosService };