import { Modelo } from "../interfaces/modelo.";
import { connection } from "../database";
//import { isValidUser, isValidUserStatus } from "../utils/valid";

class ModelService {
    static getModels = async () => {
        let [rows] = await connection.query('SELECT * FROM modelo_veh');
        let users = rows.map((r: any) => {
            return r;
        });
        return users;  
    };

    static getModelById = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM modelo_veh WHERE ID_MODELO = ?',[parseInt(id)]);
        let users = rows.map((r: any) => {
            return r;
        });
        return users;   
    };
    
    static getModelStatus = async (id: string) => {
        let [rows] = await connection.query('SELECT estatus FROM modelo_veh WHERE ID_MODELO = ?',[id]);
        var valid = rows[0]['estatus'];

        if(valid){
            return valid;
        }else{
            return "ERROR";
        }       
    };
    
    static insertModel = async (item: Modelo) => {
        await connection.query('INSERT INTO modelo_veh SET ?', [item]);
        return item;
    };
    
    static updateModel = async (item: Modelo, id: string) => {       
        const responseUpdate = await connection.query('UPDATE modelo_veh SET ? WHERE ID_MODELO = ?', [item, id]);
        return responseUpdate;
    };
    
}

export { ModelService };