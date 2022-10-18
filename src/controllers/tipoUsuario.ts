import { Request, Response } from "express";
import { UserTypeService } from "../services/tipoUsuario";

class UserTypeController {
    static getAll = async (_req:Request, res:Response) => {          
        try{
            const response = await UserTypeService.getUserTypes();
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static getById = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await UserTypeService.getUserTypeById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static insert = async ({body}:Request, res:Response) => {          
        try{
            const response = await UserTypeService.insertUserType(body)
            res.status(201).json({message: "REGISTRADO CON ÉXITO", data: response});
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static update = async (req:Request, res:Response) => {          
        try{            
            const id = req.params.id;
            const data = req.body;

            await UserTypeService.updateUserType(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.json(e);
        } 
    }
}

export { UserTypeController };