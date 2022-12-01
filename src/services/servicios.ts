import { Servicio, DetalleServicio } from "../interfaces/servicio";
import { ServiceTypeService } from "./tipoServicio";
import { ManoDeObraService } from "./manoDeObra";
import { UsuariosService } from "./usuarios";
import { connection } from "../database";
import { RefaccionesService } from "./refacciones";
import { VehiculosService } from "./vehiculos";

class ServiciosService {
    static getAll = async () => {
        const [servicios] = await connection.query('SELECT * FROM servicio');
        const response: any = [];

        for(let i = 0; i < servicios.length; i++) {
            const tipoServ = await ServiceTypeService.getServiceById(
                servicios[i].ID_TIPO_SERVICIO.toString()
            );
            delete servicios[i].ID_TIPO_SERVICIO;
            servicios[i].TIPO_SERVICIO = tipoServ[0];

            const veh = await VehiculosService.getById(
                servicios[i].MATRICULA.toString()
            );
            delete servicios[i].MATRICULA;
            servicios[i].VEHICULO = veh[0];

            const estatus = await this.getEstatus(
                servicios[i].ID_ESTATUS.toString()
            );
            delete servicios[i].ID_ESTATUS;
            servicios[i].ESTATUS = estatus[0];

            const cliente = await UsuariosService.getUserById(
                servicios[i].CLIENTE.toString()
            );
            delete servicios[i].CLIENTE;
            servicios[i].CLIENTE = cliente[0];

            if(servicios[i].TECNICO_ENCARGADO!=null){
                const tecnico = await UsuariosService.getUserById(
                    servicios[i].TECNICO_ENCARGADO.toString()
                );
                delete servicios[i].TECNICO_ENCARGADO;
                servicios[i].TECNICO_ENCARGADO = tecnico[0];
            }
            
            response.push(servicios[i]);
        }
        return response;
    };

    static getPendientes = async () => {
        const [servicios] = await connection.query('SELECT * FROM servicio WHERE id_estatus = "E" OR id_estatus = "I" OR id_estatus = "R" OR id_estatus = "S"');
        const response: any = [];

        for(let i = 0; i < servicios.length; i++) {
            const tipoServ = await ServiceTypeService.getServiceById(
                servicios[i].ID_TIPO_SERVICIO.toString()
            );
            delete servicios[i].ID_TIPO_SERVICIO;
            servicios[i].TIPO_SERVICIO = tipoServ[0];

            const veh = await VehiculosService.getById(
                servicios[i].MATRICULA.toString()
            );
            delete servicios[i].MATRICULA;
            servicios[i].VEHICULO = veh[0];

            const estatus = await this.getEstatus(
                servicios[i].ID_ESTATUS.toString()
            );
            delete servicios[i].ID_ESTATUS;
            servicios[i].ESTATUS = estatus[0];

            const cliente = await UsuariosService.getUserById(
                servicios[i].CLIENTE.toString()
            );
            delete servicios[i].CLIENTE;
            servicios[i].CLIENTE = cliente[0];

            if(servicios[i].TECNICO_ENCARGADO!=null){
                const tecnico = await UsuariosService.getUserById(
                    servicios[i].TECNICO_ENCARGADO.toString()
                );
                delete servicios[i].TECNICO_ENCARGADO;
                servicios[i].TECNICO_ENCARGADO = tecnico[0];
            }
            
            response.push(servicios[i]);
        }
        return response;
    };

    static getById = async (id: string) => {
        const [servicios] = await connection.query('SELECT * FROM servicio WHERE id_servicio = ?', [id]);
        const response: any = [];

        for(let i = 0; i < servicios.length; i++) {
            const tipoServ = await ServiceTypeService.getServiceById(
                servicios[i].ID_TIPO_SERVICIO.toString()
            );
            delete servicios[i].ID_TIPO_SERVICIO;
            servicios[i].TIPO_SERVICIO = tipoServ[0];

            const veh = await VehiculosService.getById(
                servicios[i].MATRICULA.toString()
            );
            delete servicios[i].MATRICULA;
            servicios[i].VEHICULO = veh[0];

            const estatus = await this.getEstatus(
                servicios[i].ID_ESTATUS.toString()
            );
            delete servicios[i].ID_ESTATUS;
            servicios[i].ESTATUS = estatus[0];

            const cliente = await UsuariosService.getUserById(
                servicios[i].CLIENTE.toString()
            );
            delete servicios[i].CLIENTE;
            servicios[i].CLIENTE = cliente[0];

            if(servicios[i].TECNICO_ENCARGADO!=null){
                const tecnico = await UsuariosService.getUserById(
                    servicios[i].TECNICO_ENCARGADO.toString()
                );
                delete servicios[i].TECNICO_ENCARGADO;
                servicios[i].TECNICO_ENCARGADO = tecnico[0];    
            }
            
            response.push(servicios[i]);
        }
        return response; 
    };

    static getByCliente = async (id: string) => {
        const [servicios] = await connection.query('SELECT * FROM servicio WHERE cliente = ?', [id]);
        const response: any = [];

        for(let i = 0; i < servicios.length; i++) {
            const tipoServ = await ServiceTypeService.getServiceById(
                servicios[i].ID_TIPO_SERVICIO.toString()
            );
            delete servicios[i].ID_TIPO_SERVICIO;
            servicios[i].TIPO_SERVICIO = tipoServ[0];

            delete servicios[i].CLIENTE;

            const veh = await VehiculosService.getById(
                servicios[i].MATRICULA.toString()
            );
            delete servicios[i].MATRICULA;
            servicios[i].VEHICULO = veh[0];

            const estatus = await this.getEstatus(
                servicios[i].ID_ESTATUS.toString()
            );
            delete servicios[i].ID_ESTATUS;
            servicios[i].ESTATUS = estatus[0];

            if(servicios[i].TECNICO_ENCARGADO!=null){
                const tecnico = await UsuariosService.getUserById(
                    servicios[i].TECNICO_ENCARGADO.toString()
                );
                delete servicios[i].TECNICO_ENCARGADO;
                servicios[i].TECNICO_ENCARGADO = tecnico[0];
            }

            response.push(servicios[i]);
        }
        return response; 
    };

    static getByVehiculo = async (id: string) => {
        const [servicios] = await connection.query('SELECT * FROM servicio WHERE matricula = ?', [id]);
        const response: any = [];

        for(let i = 0; i < servicios.length; i++) {
            const tipoServ = await ServiceTypeService.getServiceById(
                servicios[i].ID_TIPO_SERVICIO.toString()
            );
            delete servicios[i].ID_TIPO_SERVICIO;
            servicios[i].TIPO_SERVICIO = tipoServ[0];

            const estatus = await this.getEstatus(
                servicios[i].ID_ESTATUS.toString()
            );
            delete servicios[i].ID_ESTATUS;
            servicios[i].ESTATUS = estatus[0];

            if(servicios[i].TECNICO_ENCARGADO!=null){
                const tecnico = await UsuariosService.getUserById(
                    servicios[i].TECNICO_ENCARGADO.toString()
                );
                delete servicios[i].TECNICO_ENCARGADO;
                servicios[i].TECNICO_ENCARGADO = tecnico[0];
            }

            response.push(servicios[i]);
        }
        return response; 
    };

    static getByTecnico = async (id: string) => {
        const [servicios] = await connection.query('SELECT * FROM servicio WHERE tecnico_encargado = ?', [id]);
        const response: any = [];

        for(let i = 0; i < servicios.length; i++) {
            const tipoServ = await ServiceTypeService.getServiceById(
                servicios[i].ID_TIPO_SERVICIO.toString()
            );
            delete servicios[i].ID_TIPO_SERVICIO;
            servicios[i].TIPO_SERVICIO = tipoServ[0];

            const veh = await VehiculosService.getById(
                servicios[i].MATRICULA.toString()
            );
            delete servicios[i].MATRICULA;
            servicios[i].VEHICULO = veh[0];

            const estatus = await this.getEstatus(
                servicios[i].ID_ESTATUS.toString()
            );
            delete servicios[i].ID_ESTATUS;
            servicios[i].ESTATUS = estatus[0];

            const cliente = await UsuariosService.getUserById(
                servicios[i].CLIENTE.toString()
            );
            delete servicios[i].CLIENTE;
            servicios[i].CLIENTE = cliente[0];
            delete servicios[i].TECNICO_ENCARGADO;
            response.push(servicios[i]);
        }
        return response; 
    };

    static getByEstatus = async (id: string) => {
        let [servicios]: any = [];
        if(id=="T"){
            [servicios] = await connection.query('SELECT s.*, a.FECHA as "FECHA_TERMINO" FROM servicio s, actualizacion_servicio a WHERE a.ID_SERVICIO = s.ID_SERVICIO AND s.id_estatus = ? AND a.ID_ESTATUS = ?', [id, id]);
        }else{
            [servicios] = await connection.query('SELECT * FROM servicio WHERE id_estatus = ?', [id]);
        }
        
        const response: any = [];

        for(let i = 0; i < servicios.length; i++) {
            const tipoServ = await ServiceTypeService.getServiceById(
                servicios[i].ID_TIPO_SERVICIO.toString()
            );
            delete servicios[i].ID_TIPO_SERVICIO;
            servicios[i].TIPO_SERVICIO = tipoServ[0];

            const veh = await VehiculosService.getById(
                servicios[i].MATRICULA.toString()
            );
            delete servicios[i].MATRICULA;
            servicios[i].VEHICULO = veh[0];

            const cliente = await UsuariosService.getUserById(
                servicios[i].CLIENTE.toString()
            );
            delete servicios[i].CLIENTE;
            servicios[i].CLIENTE = cliente[0];

            if(servicios[i].TECNICO_ENCARGADO!=null){
                const tecnico = await UsuariosService.getUserById(
                    servicios[i].TECNICO_ENCARGADO.toString()
                );
                delete servicios[i].TECNICO_ENCARGADO;
                servicios[i].TECNICO_ENCARGADO = tecnico[0];
            }

            response.push(servicios[i]);
        }
        return response; 
    };

    static insert = async (item: Servicio) => {     
        let [rows] = await connection.query('SELECT COUNT(*) FROM servicio WHERE matricula = ? AND (ID_ESTATUS = "I" OR ID_ESTATUS = "E" OR ID_ESTATUS = "R" OR ID_ESTATUS = "S")',[item.MATRICULA]);
        var count = rows[0]['COUNT(*)'];
        if(count == 0){      
            await connection.query('INSERT INTO servicio SET ?', [item]);
            const id_reg = await connection.query('SELECT ID_SERVICIO from servicio ORDER BY id_servicio DESC LIMIT 1');
            const response = await this.getById(id_reg[0][0]['ID_SERVICIO']);
            return response[0];
        }else{
            return "VEHICULO SE ENCUENTRA EN TALLER"
        }      
    };
    
    static update = async (item: Servicio, id: string) => {
        const responseInsert = await connection.query('UPDATE servicio SET ? WHERE id_servicio = ?', [item, id]);
        return responseInsert;                 
    };
    
    static insertDetalle = async (item: DetalleServicio) => {     
        const res = await connection.query('SELECT * FROM detalle_servicio WHERE id_servicio = ? AND id_producto = ? AND tipo_prod = ?', [item.ID_SERVICIO, item.ID_PRODUCTO, item.TIPO_PROD]);

        if(res[0][0]){
            await connection.query('UPDATE detalle_servicio SET cantidad = cantidad + ? WHERE id_servicio = ? AND id_producto = ? AND tipo_prod = ?', [item.CANTIDAD, item.ID_SERVICIO, item.ID_PRODUCTO, item.TIPO_PROD]);
        }else{
            await connection.query('INSERT INTO detalle_servicio SET ?', [item]);
        }
        if(item.TIPO_PROD == "R"){
            await connection.query('UPDATE refaccion SET stock = stock - ? WHERE id_refaccion = ?', [item.CANTIDAD, item.ID_PRODUCTO]);
        }

        //await connection.query('INSERT INTO detalle_servicio SET ?', [item]);
        return item;      
    };

    static getDetalleServicio  = async (id: string) => {     
        const [detalle] = await connection.query('SELECT * FROM detalle_servicio WHERE id_servicio = ?', [id]);
        const response: any = [];

        for(let i = 0; i < detalle.length; i++) {
            if(detalle[i].TIPO_PROD.toString() == "M"){
                const prod = await ManoDeObraService.getWorkforceById(
                    detalle[i].ID_PRODUCTO.toString()
                );
                delete detalle[i].ID_PRODUCTO;
                detalle[i].PRODUCTO = prod[0];
            }else if (detalle[i].TIPO_PROD.toString() == "R"){
                const prod = await RefaccionesService.getById(
                    detalle[i].ID_PRODUCTO.toString()
                );
                delete detalle[i].ID_PRODUCTO;
                detalle[i].PRODUCTO = prod[0];
            }

            response.push(detalle[i]);
        }
        return response; 
    };

    static getAllEstatus = async () => {
        let [rows] = await connection.query('SELECT * FROM estatus');
        let estatus = rows.map((r: any) => {
            return r;
        });
        return estatus;  
    };

    static getEstatus = async (id: string) => {
        let [rows] = await connection.query('SELECT * FROM estatus WHERE ID_ESTATUS = ?', [id]);
        let estatus = rows.map((r: any) => {
            return r;
        });
        return estatus;  
    };

    static getActualizacionByServicio = async (id: string) => {     
        const [actualizaciones] = await connection.query('SELECT * FROM actualizacion_servicio WHERE id_servicio = ?', [id]);
        const response: any = [];

        for(let i = 0; i < actualizaciones.length; i++) {
            delete actualizaciones[i].ID_SERVICIO;
            const estatus = await this.getEstatus(
                actualizaciones[i].ID_ESTATUS.toString()
            );
            delete actualizaciones[i].ID_ESTATUS;
            actualizaciones[i].ESTATUS = estatus[0];

            const usuario = await UsuariosService.getUserById(
                actualizaciones[i].ID_USUARIO.toString()
            );
            delete actualizaciones[i].ID_USUARIO;
            actualizaciones[i].USUARIO = usuario[0];

            response.push(actualizaciones[i]);
        }
        return response; 
    };

    static getActualizacionByUsuario = async (id: string) => {     
        const [actualizaciones] = await connection.query('SELECT * FROM actualizacion_servicio WHERE id_usuario = ?', [id]);
        const response: any = [];

        for(let i = 0; i < actualizaciones.length; i++) {
            delete actualizaciones[i].ID_USUARIO;
            const estatus = await this.getEstatus(
                actualizaciones[i].ID_ESTATUS.toString()
            );
            delete actualizaciones[i].ID_ESTATUS;
            actualizaciones[i].ESTATUS = estatus[0];

            response.push(actualizaciones[i]);
        }
        return response; 
    };

    static insertActualizacion = async (item: any) => {
        if(item.ID_ESTATUS){
            let [rows] = await connection.query('SELECT COUNT(*) FROM servicio WHERE matricula = ? AND (ID_ESTATUS = "I" OR ID_ESTATUS = "E" OR ID_ESTATUS = "R" OR ID_ESTATUS = "S") AND id_servicio != ?',[item.MATRICULA, item.ID_SERVICIO]);
            var count = rows[0]['COUNT(*)'];
            if(count==0){
                delete item.MATRICULA;
                await connection.query('INSERT INTO actualizacion_servicio SET ?', [item]);
                await connection.query('UPDATE servicio SET id_estatus = ? WHERE id_servicio = ?', [item.ID_ESTATUS, item.ID_SERVICIO]);
                return item; 
            }else{
                return "VEHICULO SE ENCUENTRA EN TALLER"
            }
        }         
    };
}

export { ServiciosService };