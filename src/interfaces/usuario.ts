import { Auth } from "./auth";
export interface Usuario extends Auth {
    ID_USUARIO?: number,
    ID_TIPO_PERSONA?: number,
    ID_TIPO_USUARIO?: number,
    NOMBRE: string,
    TELEFONO?: string,
    RFC?: string,
    DIRECCION?: string,
    IMG?: string,
    ESTATUS?: string
}