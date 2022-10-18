import { Refaccion } from "../interfaces/refaccion";
import { connection } from "../database";

class RefaccionesService {
    static getAll = async () => {
        let [rows] = await connection.query('SELECT * FROM consultar_refacciones');
        let ref = rows.map((r: any) => {
            return r;
        });
        return ref;
    };

    static getActives = async () => {
        let [rows] = await connection.query('SELECT * FROM consultar_refacciones WHERE estatus = "A"');
        let ref = rows.map((r: any) => {
            return r;
        });
        return ref;
    };

    static getById = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM consultar_refacciones WHERE id = ?',[id]);
        let ref = rows.map((r: any) => {
            return r;
        });
        return ref;   
    };

    static getByTipoRef = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM consultar_refacciones WHERE id_tipo_refaccion = ?',[id]);
        let ref = rows.map((r: any) => {
            return r;
        });
        return ref;   
    };

    static insert = async (item: Refaccion) => {     
        await connection.query('INSERT INTO refaccion SET ?', [item]);
        return item;      
    };
    
    static update = async (item: Refaccion, id: string) => {       
        const responseInsert = await connection.query('UPDATE refaccion SET ? WHERE id_refaccion = ?', [item, id]);
        return responseInsert;        
    };
    
}

export { RefaccionesService };