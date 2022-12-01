import { connection } from "../database";
//import { isValidUser, isValidUserStatus } from "../utils/valid";

class DashboardService {
    static getDashboardGeneral = async () => {
        let dashboard = {}
        const [num_clientes] = await connection.query('SELECT COUNT(*) AS "NUM_CLIENTES" FROM usuario WHERE ID_TIPO_USUARIO = 4 and ESTATUS = "A"');
        const [num_tecnicos] = await connection.query('SELECT COUNT(*) AS "NUM_TECNICOS" FROM usuario WHERE ID_TIPO_USUARIO = 3 and ESTATUS = "A"');
        const [citas_pend] = await connection.query('SELECT COUNT(*) AS "CITAS_PENDIENTES" FROM servicio WHERE ID_ESTATUS = "C"');
        const [serv_terminados] = await connection.query('SELECT COUNT(*) AS "SERVICIOS_TERMINADOS" FROM servicio WHERE ID_ESTATUS = "T"');
        const [serv_ingreso] = await connection.query('SELECT COUNT(*) AS "SERVICIOS_INGRESO" FROM servicio WHERE ID_ESTATUS = "I"');      
        const [serv_espera] = await connection.query('SELECT COUNT(*) AS "SERVICIOS_ESPERA" FROM servicio WHERE ID_ESTATUS = "E"');
        const [serv_revision] = await connection.query('SELECT COUNT(*) AS "SERVICIOS_REVISION" FROM servicio WHERE ID_ESTATUS = "R"');
        const [serv_salida] = await connection.query('SELECT COUNT(*) AS "SERVICIOS_SALIDA" FROM servicio WHERE ID_ESTATUS = "S"');
        const [veh_taller] = await connection.query('SELECT COUNT(*) AS "VEH_TALLER" FROM servicio WHERE ID_ESTATUS = "I" OR ID_ESTATUS = "E" OR ID_ESTATUS = "R" OR ID_ESTATUS = "S"');

        
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        let [ingresados_hoy]: any = [];
        if(month < 10){
            [ingresados_hoy] = await connection.query(`SELECT COUNT(*) AS "INGRESADOS_HOY" FROM actualizacion_servicio WHERE ID_ESTATUS = "I" AND (FECHA > \'${year}-0${month}-${day} 00:00:00\' AND FECHA < \'${year}-0${month}-${day} 23:59:59\')`);
        }else{
            [ingresados_hoy] = await connection.query(`SELECT COUNT(*) AS "INGRESADOS_HOY" FROM actualizacion_servicio WHERE ID_ESTATUS = "I" AND (FECHA > \'${year}-${month}-${day} 00:00:00\' AND FECHA < \'${year}-${month}-${day} 23:59:59\')`);
        }
     

        dashboard = {
            "NUM_CLIENTES": num_clientes[0]['NUM_CLIENTES'],
            "NUM_TECNICOS":  num_tecnicos[0]['NUM_TECNICOS'],
            "CITAS_PENDIENTES": citas_pend[0]['CITAS_PENDIENTES'],
            "SERVICIOS_TERMINADOS": serv_terminados[0]['SERVICIOS_TERMINADOS'],
            "SERVICIOS_INGRESO": serv_ingreso[0]['SERVICIOS_INGRESO'],
            "SERVICIOS_ESPERA": serv_espera[0]['SERVICIOS_ESPERA'],
            "SERVICIOS_REVISION": serv_revision[0]['SERVICIOS_REVISION'],
            "SERVICIOS_SALIDA": serv_salida[0]['SERVICIOS_SALIDA'],
            "VEH_TALLER": veh_taller[0]['VEH_TALLER'],
            "INGRESADOS_HOY": ingresados_hoy[0]['INGRESADOS_HOY'],
        };
        
        return dashboard;  
    };
    
}

export { DashboardService };