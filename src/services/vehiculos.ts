import { Vehiculo  } from "../interfaces/vehiculo";
import { connection } from "../database";
import { UsuariosService } from "../services/usuarios";

class VehiculosService {
    static getAll = async () => {
        let [rows] = await connection.query('SELECT * FROM consultar_vehiculos');
        let veh = rows.map((r: any) => {
            return r;
        });
        return veh;
    };

    static getById = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM consultar_vehiculos WHERE matricula = ?',[id]);
        let veh = rows.map((r: any) => {
            return r;
        });
        return veh;   
    };

    static getAllClienteVeh = async () => {
        let [rows] = await connection.query('SELECT * FROM cliente_veh');
        var veh: any = [];

        for(let i = 0; i < rows.length; i++) {
            const usuario = await UsuariosService.getUserById(
                rows[i].ID_USUARIO.toString()
            );
            delete rows[i].ID_USUARIO;
            rows[i].USUARIO = usuario[0];

            const vehiculo = await this.getById(
                rows[i].MATRICULA.toString()
            );
            delete rows[i].MATRICULA;
            rows[i].VEHICULO = vehiculo[0];

            veh.push(rows[i]);
        }

        return veh;  
    };

    static getAllVehByCliente = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM consultar_vehiculos WHERE id_cliente = ?', [id]);
        let veh = rows.map((r: any) => {
            return r;
        });
        return veh; 
    };

    static insert = async (item: Vehiculo, matricula: string) => {     
        await connection.query('INSERT INTO vehiculo SET ?', [item]);
        const response = await this.getById(matricula);
        return response[0];   
    };
    
    static update = async (item: Vehiculo, id: string) => {       
        const responseInsert = await connection.query('UPDATE vehiculo SET ? WHERE matricula = ?', [item, id]);
        return responseInsert;        
    };
    
    static insertClienteVeh = async (id: number, matricula: string) => {     
        await connection.query('INSERT INTO cliente_veh SET id_usuario = ?, matricula = ?', [id, matricula]);
        return {ID: id, MATRICULA: matricula};      
    };
}

export { VehiculosService };