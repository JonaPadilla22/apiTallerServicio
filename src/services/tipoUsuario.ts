import { TiposUsuario } from "../interfaces/tipoUsuario";
import { connection } from "../database";
//import { isValidUser, isValidUserStatus } from "../utils/valid";

class UserTypeService {
    static getUserTypes = async () => {
        let [rows] = await connection.query('SELECT * FROM tipo_usuario');
        let users = rows.map((r: any) => {
            return r;
        });
        return users;  
    };

    static getUserTypeById = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM tipo_usuario WHERE ID_TIPO_USUARIO = ?',[parseInt(id)]);
        let users = rows.map((r: any) => {
            return r;
        });
        return users;   
    };
    
    static getUserTypeStatus = async (id: string) => {
        let [rows] = await connection.query('SELECT estatus FROM tipo_usuario WHERE ID_TIPO_USUARIO = ?',[id]);
        var valid = rows[0]['estatus'];

        if(valid){
            return valid;
        }else{
            return "ERROR";
        }       
    };
    
    static insertUserType = async (item: TiposUsuario) => {
        await connection.query('INSERT INTO tipo_usuario SET ?', [item]);
        return item;
    };
    
    static updateUserType = async (item: TiposUsuario, id: string) => {       
        const responseUpdate = await connection.query('UPDATE tipo_usuario SET ? WHERE ID_TIPO_USUARIO = ?', [item, id]);
        return responseUpdate;
    };
    
}

export { UserTypeService };