import { Request, Response } from "express";
import { Servicio, DetalleServicio } from "../interfaces/servicio";
import { ServiciosService } from "../services/servicios";

class ServiciosController {
    static getAll = async (_req:Request, res:Response) => { 
        try{       
            const response = await ServiciosService.getAll();              
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static getEstatus = async (_req:Request, res:Response) => { 
        try{       
            const response = await ServiciosService.getAllEstatus();              
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static getPendientes = async (_req:Request, res:Response) => { 
        try{       
            const response = await ServiciosService.getPendientes();              
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static getById = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await ServiciosService.getById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static getByCliente = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await ServiciosService.getByCliente(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static getByVehiculo = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await ServiciosService.getByVehiculo(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static getByTecnico = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await ServiciosService.getByTecnico(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static getByEstatus = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await ServiciosService.getByEstatus(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }
    
    static insert = async ({ body }:Request, res:Response) => {
        try{                  
            const veh: Servicio = body;                 
            const response = await ServiciosService.insert(veh);

            res.status(201).json({message: "REGISTRADO CON ÉXITO", data: response});     
        }catch(e){
            res.status(500).json(e);
        }
    }
    
    static update = async (req:Request, res:Response) => {
        try{
            const id = req.params.id;
            const data: Servicio = req.body;

            await ServiciosService.update(data, id);

            res.json({message: "ACTUALIZADO CON ÉXITO"});         
        }catch(e){
            res.status(500).json(e);
        }
    }

    static insertDetalle = async ({ body }:Request, res:Response) => {
        try{                  
            const det: DetalleServicio = body;                 
            const response = await ServiciosService.insertDetalle(det);

            res.status(201).json({message: "REGISTRADO CON ÉXITO", data: response});     
        }catch(e){
            res.status(500).json(e);
        }
    }

    static getDetalle = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await ServiciosService.getDetalleServicio(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static getActualizacionByServicio = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await ServiciosService.getActualizacionByServicio(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static getActualizacionByUsuario = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await ServiciosService.getActualizacionByUsuario(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }

    static insertActualizacion = async ({ body }:Request, res:Response) => {
        try{                               
            const response = await ServiciosService.insertActualizacion(body);

            res.status(201).json({message: "ACTUALIZADO CON ÉXITO", data: response});     
        }catch(e){
            res.status(500).json(e);
        }
    }
}

export { ServiciosController };