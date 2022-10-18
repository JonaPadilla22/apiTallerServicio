import { ManoDeObra } from "../interfaces/manoDeObra";
import { connection } from "../database";
//import { isValidUser, isValidUserStatus } from "../utils/valid";

class ManoDeObraService {
    static getWorkforces = async () => {
        let [rows] = await connection.query('SELECT * FROM mano_obra');
        let users = rows.map((r: any) => {
            return r;
        });
        return users;  
    };

    static getWorkforceById = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM mano_obra WHERE ID_MANO_OBRA = ?',[parseInt(id)]);
        let users = rows.map((r: any) => {
            return r;
        });
        return users;   
    };
    
    static getWorkforceStatus = async (id: string) => {
        let [rows] = await connection.query('SELECT estatus FROM mano_obra WHERE ID_MANO_OBRA = ?',[id]);
        var valid = rows[0]['estatus'];

        if(valid){
            return valid;
        }else{
            return "ERROR";
        }       
    };
    
    static insertWorkforce = async (item: ManoDeObra) => {
        await connection.query('INSERT INTO mano_obra SET ?', [item]);
        return item;
    };
    
    static updateWorkforce = async (item: ManoDeObra, id: string) => {       
        const responseUpdate = await connection.query('UPDATE mano_obra SET ? WHERE ID_MANO_OBRA = ?', [item, id]);
        return responseUpdate;
    };
    
}

export { ManoDeObraService };