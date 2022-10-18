import { Request, Response } from "express";
import { Refaccion } from "../interfaces/refaccion";
import { RefaccionesService } from "../services/refacciones";

class RefaccionesController {
    static getAll = async (_req:Request, res:Response) => { 
        try{       
            const response = await RefaccionesService.getAll();              
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static getActives = async (_req:Request, res:Response) => { 
        try{       
            const response = await RefaccionesService.getActives();              
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static getById = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await RefaccionesService.getById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static getByTipo = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await RefaccionesService.getByTipoRef(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }
    
    static insert = async ({ body }:Request, res:Response) => {
        try{                  
            const veh: Refaccion = body;                 
            const response = await RefaccionesService.insert(veh);

            res.status(201).json({message: "REGISTRADO CON ÉXITO", data: response});     
        }catch(e){
            res.status(500).json(e);
        }
    }
    
    static update = async (req:Request, res:Response) => {
        try{
            const id = req.params.id;
            const data: Refaccion = req.body;

            await RefaccionesService.update(data, id);

            res.json({message: "ACTUALIZADO CON ÉXITO"});         
        }catch(e){
            res.status(500).json(e);
        }
    }

}

export { RefaccionesController };