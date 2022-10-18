import { Request, Response } from "express";
import { Usuario } from "../interfaces/usuario";
import { UsuariosService } from "../services/usuarios";
//import { enviar_mail } from "../utils/sendEmail";
import { generatePass, encrypt } from "../utils/bcrypt";
var path = require('path')
class UsuariosController {
    static getAll = async (_req:Request, res:Response) => { 
        try{       
            const response = await UsuariosService.getUsers();       
           
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }  

    static getActives = async (_req:Request, res:Response) => { 
        try{       
            const response = await UsuariosService.getUsersActive();       
           
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    } 

    static getById = async (req:Request, res:Response) => {          
        try{
            const id_get = req.params.id;
            const response = await UsuariosService.getUserById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }   
    }  
    
    static insert = async ({ body }:Request, res:Response) => {
        try{
            const newPass = await generatePass();
            const passEnc = await encrypt(newPass);    
                     
            const user: Usuario = body;       
            user.CONTRA = passEnc;
            
            const response = await UsuariosService.insertUser(user);

            if(response != "CORREO YA REGISTRADO"){
                // if(response==user){
                //     await enviar_mail(user, newPass, 1);
                // }
    
                res.status(201).json({message: "REGISTRADO CON ÉXITO", data: response});
            }else{
                res.status(500).json(response);
            }
       
        }catch(e){
            res.status(500).json(e);
        }
    }
    
    static update = async (req:Request, res:Response) => {
        try{
            const id = req.params.id;
            const data: Usuario = req.body;

            await UsuariosService.updateUser(data, id);

            res.json({message: "ACTUALIZADO CON ÉXITO"});         
        }catch(e){
            res.status(500).json(e);
        }
    }

    static updatePassword = async (req:Request, res:Response) => {
        try{
            const id = req.params.id;
            const pass = req.params.pass;

            const passEnc = await encrypt(pass);

            await UsuariosService.updateUserPassword(passEnc, id);

            // const resp = await UsuariosService.getUserById(id);

            // const user: Usuario = {CORREO: resp[0]['CORREO'], NOMBRE: resp[0]['NOMBRE'], CONTRA: ""};

            // await enviar_mail(user, pass, 2);
            
            res.status(201).json({message: "ACTUALIZADO CON EXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static updateImagenPerfil = async (req:Request, res:Response) => {
        try{
            if(req.files){
                const id = req.params.id;
                const file: any = req.files.file; 
                const extFile = path.extname(file.name);
                const img = id + extFile;
                const data = {IMG: img}
                file.mv("files/usuarios/" + id + extFile);
                await UsuariosService.updateImg(data, id);
    
                res.json({message: "ACTUALIZADO CON ÉXITO"});  
            }              
        }catch(e){
            res.status(500).json(e);
        }
    }
}

export { UsuariosController };