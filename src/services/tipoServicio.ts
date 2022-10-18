import { Servicio } from "../interfaces/tipoServicio";
import { connection } from "../database";
//import { isValidUser, isValidUserStatus } from "../utils/valid";

class ServiceTypeService {
    static getServices = async () => {
        let [rows] = await connection.query('SELECT * FROM tipo_servicio');
        let users = rows.map((r: any) => {
            return r;
        });
        return users;  
    };

    static getServiceById = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM tipo_servicio WHERE ID_TIPO_SERVICIO = ?',[parseInt(id)]);
        let users = rows.map((r: any) => {
            return r;
        });
        return users;   
    };
    
    static getServiceStatus = async (id: string) => {
        let [rows] = await connection.query('SELECT estatus FROM tipo_servicio WHERE ID_TIPO_SERVICIO = ?',[id]);
        var valid = rows[0]['estatus'];

        if(valid){
            return valid;
        }else{
            return "ERROR";
        }       
    };
    
    static insertService = async (item: Servicio) => {
        await connection.query('INSERT INTO tipo_servicio SET ?', [item]);
        return item;
    };
    
    static updateService = async (item: Servicio, id: string) => {       
        const responseUpdate = await connection.query('UPDATE tipo_servicio SET ? WHERE ID_TIPO_SERVICIO = ?', [item, id]);
        return responseUpdate;
    };
    
}

export { ServiceTypeService };