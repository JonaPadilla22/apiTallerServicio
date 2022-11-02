import { Usuario } from "../interfaces/usuario";
import { connection } from "../database";
//import { isValidUser, isValidUserStatus } from "../utils/valid";

class UsuariosService {
    static getUsers = async () => {
        let [rows] = await connection.query('SELECT * FROM consultar_usuarios');
        let users = rows.map((r: any) => {
            return r;
        });
        return users;  
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
            await connection.query('INSERT INTO usuario SET ?', [item]);
            return item;
        }else{
            return "CORREO YA REGISTRADO"
        }
    };
    
    static updateUser = async (item: Usuario, id: string) => {       
        const responseInsert = await connection.query('UPDATE usuario SET ? WHERE id_usuario = ?', [item, id]);
        return responseInsert;        
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