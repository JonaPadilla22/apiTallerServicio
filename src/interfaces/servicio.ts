export interface Servicio {
    ID_SERVICIO?: number,
    MATRICULA?: string,
    ID_TIPO_SERVICIO?: number,
    DESCRIPCION?: string,
    CLIENTE?: number,
    TECNICO_ENCARGADO?: number,
    TIEMPO_ESTIMADO_MIN?: number,
    ESTATUS?: string
}

export interface DetalleServicio {
    ID_SERVICIO?: number,
    ID_PRODUCTO?: number,
    TIPO_PROD?: string,
    PRECIO?: number,
    CANTIDAD?: number
}