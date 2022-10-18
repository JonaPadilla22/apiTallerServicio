import { Request, Response } from "express";
import { Auth } from "../interfaces/auth";
import { loginUser } from "../services/auth";

class AuthController {
    static loginAuth = async ({ body }:Request, res:Response) => { 
        try{
            const item: Auth = body;
            const response = await loginUser(item);

            if(response == "CONTRASEÑA INCORRECTA"){
                res.status(403);             
            }else if(response == "DATOS INVÁLIDOS"){
                res.status(404);
            }else{
                res.status(200);
            }
            res.json(response);
        }catch(e){
            res.send(e);
        }
    }
}

export { AuthController };