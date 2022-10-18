import { Request, Response } from "express";
import { Vehiculo } from "../interfaces/vehiculo";
import { VehiculosService } from "../services/vehiculos";

class VehiculosController {
    static getAll = async (_req:Request, res:Response) => { 
        try{       
            const response = await VehiculosService.getAll();       
           
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static getById = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await VehiculosService.getById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static getAllClienteVeh = async (_req:Request, res:Response) => { 
        try{       
            const response = await VehiculosService.getAllClienteVeh();       
           
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static getAllVehByCliente = async (req:Request, res:Response) => { 
        try{       
            const id = req.params.id;
            const response = await VehiculosService.getAllVehByCliente(id);      
           
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }
    
    static insert = async ({ body }:Request, res:Response) => {
        try{                  
            const veh: Vehiculo = body;                 
            const response = await VehiculosService.insert(veh);

            res.status(201).json({message: "REGISTRADO CON ÉXITO", data: response});     
        }catch(e){
            res.status(500).json(e);
        }
    }
    
    static update = async (req:Request, res:Response) => {
        try{
            const id = req.params.id;
            const data: Vehiculo = req.body;

            await VehiculosService.update(data, id);

            res.json({message: "ACTUALIZADO CON ÉXITO"});         
        }catch(e){
            res.status(500).json(e);
        }
    }

    static insertClienteVeh = async ({ body }:Request, res:Response) => {
        try{                              
            const response = await VehiculosService.insertClienteVeh(body.ID_USUARIO, body.MATRICULA);

            res.status(201).json({message: "REGISTRADO CON ÉXITO", data: response});     
        }catch(e){
            res.status(500).json(e);
        }
    }
}

export { VehiculosController };