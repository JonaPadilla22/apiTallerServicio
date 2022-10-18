import { Tipo } from "../interfaces/tipoPersona.";
import { connection } from "../database";
//import { isValidUser, isValidUserStatus } from "../utils/valid";

class TypePersonService {
    static getTypes = async () => {
        let [rows] = await connection.query('SELECT * FROM tipo_persona');
        let users = rows.map((r: any) => {
            return r;
        });
        return users;  
    };

    static getTypeById = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM tipo_persona WHERE ID_TIPO_PERSONA = ?',[parseInt(id)]);
        let users = rows.map((r: any) => {
            return r;
        });
        return users;   
    };
    
    static getTypeStatus = async (id: string) => {
        let [rows] = await connection.query('SELECT estatus FROM tipo_persona WHERE ID_TIPO_PERSONA = ?',[id]);
        var valid = rows[0]['estatus'];

        if(valid){
            return valid;
        }else{
            return "ERROR";
        }       
    };
    
    static insertType = async (item: Tipo) => {
        await connection.query('INSERT INTO tipo_persona SET ?', [item]);
        return item;
    };
    
    static updateType = async (item: Tipo, id: string) => {       
        const responseUpdate = await connection.query('UPDATE tipo_persona SET ? WHERE ID_TIPO_PERSONA = ?', [item, id]);
        return responseUpdate;
    };
    
}

export { TypePersonService };