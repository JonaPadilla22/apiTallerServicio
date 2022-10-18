import { Request, Response, NextFunction } from "express";
import { UsuariosService } from "../services/usuarios";
import { verificarToken } from "../utils/jwt";

const revisarSesion = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const jwtRecibida = req.headers.authorization || "";
        const jwt = jwtRecibida.split(" ").pop();
        const sesion = verificarToken(`${jwt}`);
        if(sesion){
            var obj = JSON.parse(JSON.stringify(sesion));
            
            let estatus = await UsuariosService.getUserStatus(obj['id']);
            
            if(estatus == 'A'){
                //const user = await UsuariosService.getUserById(obj['id']);
                //console.log(user[0].TIPO_USUARIO.ID);
                next();
            }else{
                res.status(401);
                res.send("SESION INVALIDA");
            }       
        }else{
            res.status(401);
            res.send("SESION INVALIDA");
        }
    }catch(e){
        res.status(400);
        res.send("SESION INVALIDA");
    }
}

export { revisarSesion };