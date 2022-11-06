import { Servicio, DetalleServicio } from "../interfaces/servicio";
import { ServiceTypeService } from "./tipoServicio";
import { ManoDeObraService } from "./manoDeObra";
import { UsuariosService } from "./usuarios";
import { connection } from "../database";
import { RefaccionesService } from "./refacciones";

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

            const tecnico = await UsuariosService.getUserById(
                servicios[i].TECNICO_ENCARGADO.toString()
            );
            delete servicios[i].TECNICO_ENCARGADO;
            servicios[i].TECNICO_ENCARGADO = tecnico[0];

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

            const estatus = await this.getEstatus(
                servicios[i].ID_ESTATUS.toString()
            );
            delete servicios[i].ID_ESTATUS;
            servicios[i].ESTATUS = estatus[0];

            const tecnico = await UsuariosService.getUserById(
                servicios[i].TECNICO_ENCARGADO.toString()
            );
            delete servicios[i].TECNICO_ENCARGADO;
            servicios[i].TECNICO_ENCARGADO = tecnico[0];

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

            const tecnico = await UsuariosService.getUserById(
                servicios[i].TECNICO_ENCARGADO.toString()
            );
            delete servicios[i].TECNICO_ENCARGADO;
            servicios[i].TECNICO_ENCARGADO = tecnico[0];

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

            response.push(servicios[i]);
        }
        return response; 
    };

    static getByEstatus = async (id: string) => {
        const [servicios] = await connection.query('SELECT * FROM servicio WHERE id_estatus = ?', [id]);
        const response: any = [];

        for(let i = 0; i < servicios.length; i++) {
            const tipoServ = await ServiceTypeService.getServiceById(
                servicios[i].ID_TIPO_SERVICIO.toString()
            );
            delete servicios[i].ID_TIPO_SERVICIO;
            servicios[i].TIPO_SERVICIO = tipoServ[0];

            const cliente = await UsuariosService.getUserById(
                servicios[i].CLIENTE.toString()
            );
            delete servicios[i].CLIENTE;
            servicios[i].CLIENTE = cliente[0];

            const tecnico = await UsuariosService.getUserById(
                servicios[i].TECNICO_ENCARGADO.toString()
            );
            delete servicios[i].TECNICO_ENCARGADO;
            servicios[i].TECNICO_ENCARGADO = tecnico[0];

            response.push(servicios[i]);
        }
        return response; 
    };

    static insert = async (item: Servicio) => {     
        await connection.query('INSERT INTO servicio SET ?', [item]);
        const id_reg = await connection.query('SELECT ID_SERVICIO from servicio ORDER BY id_servicio DESC LIMIT 1');
        const response = await this.getById(id_reg[0][0]['ID_SERVICIO']);
        return response[0];
    };
    
    static update = async (item: Servicio, id: string) => {       
        const responseInsert = await connection.query('UPDATE servicio SET ? WHERE id_servicio = ?', [item, id]);
        return responseInsert;        
    };
    
    static insertDetalle = async (item: DetalleServicio) => {     
        await connection.query('INSERT INTO detalle_servicio SET ?', [item]);
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

    static insertActualizacion = async (item: DetalleServicio) => {     
        await connection.query('INSERT INTO actualizacion_servicio SET ?', [item]);
        return item;      
    };
}

export { ServiciosService };