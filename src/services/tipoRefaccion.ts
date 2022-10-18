import { TipoRefaccion } from "../interfaces/tipoRefaccion";
import { connection } from "../database";
//import { isValidUser, isValidUserStatus } from "../utils/valid";

class TypeRepairService {
    static getTypeRepairs = async () => {
        let [rows] = await connection.query('SELECT * FROM tipo_refaccion');
        let users = rows.map((r: any) => {
            return r;
        });
        return users;  
    };

    static getTypeRepairById = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM tipo_refaccion WHERE ID_TIPO_REFACCION = ?',[parseInt(id)]);
        let users = rows.map((r: any) => {
            return r;
        });
        return users;   
    };
    
    static getTypeRepairStatus = async (id: string) => {
        let [rows] = await connection.query('SELECT estatus FROM tipo_refaccion WHERE ID_TIPO_REFACCION = ?',[id]);
        var valid = rows[0]['estatus'];

        if(valid){
            return valid;
        }else{
            return "ERROR";
        }       
    };
    
    static insertTypeRepair = async (item: TipoRefaccion) => {
        await connection.query('INSERT INTO tipo_refaccion SET ?', [item]);
        return item;
    };
    
    static updateTypeRepair = async (item: TipoRefaccion, id: string) => {       
        const responseUpdate = await connection.query('UPDATE tipo_refaccion SET ? WHERE ID_TIPO_REFACCION = ?', [item, id]);
        return responseUpdate;
    };
    
}

export { TypeRepairService };