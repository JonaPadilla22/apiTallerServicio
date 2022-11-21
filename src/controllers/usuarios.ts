import { Request, Response } from "express";
import { Usuario } from "../interfaces/usuario";
import { UsuariosService } from "../services/usuarios";
import { UserTypeService } from "../services/tipoUsuario";
import { TypePersonService } from "../services/tipoPersona";
import { enviar_mail } from "../utils/sendEmail";
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

    static getByToken = async (req:Request, res:Response) => { 
        try{
            let response: any;
            if(req.headers.authorization){
                const jwtRecibida = req.headers.authorization || "";
                const jwt = jwtRecibida.split(" ").pop();
                response = await UsuariosService.getByToken(jwt);    
            }else{
                response = "";
            }
               
           
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

    static getClientes = async (_req:Request, res:Response) => { 
        try{       
            const clientes = await UsuariosService.getClientes();       
            const response: any = [];
      
            for (let i = 0; i < clientes.length; i++) {
              const tipo_usuario = await UserTypeService.getUserTypeById(
                clientes[i].ID_TIPO_USUARIO.toString()
              );
              delete clientes[i].ID_TIPO_USUARIO;
              clientes[i].TIPO_USUARIO = tipo_usuario[0];

              if(clientes[i].ID_TIPO_PERSONA!=null){
                const tipo_persona = await TypePersonService.getTypeById(
                    clientes[i].ID_TIPO_PERSONA.toString()
                  );
                  delete clientes[i].ID_TIPO_PERSONA;
                  clientes[i].TIPO_PERSONA = tipo_persona[0];
              }
              
              response.push(clientes[i]);
            }
      
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
                await enviar_mail(user.CORREO, user.NOMBRE, newPass);
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

            const newpass = req.body.CONTRA;
            const isPass = await UsuariosService.checkUserPassword(pass, id);
            if(!isPass){
                res.status(304).json({error: "CONTRASEÑA ACTUAL INCORRECTA"}); 
                return;
            }

            const passEnc = await encrypt(newpass);
            await UsuariosService.updateUserPassword(passEnc, id);
            res.status(201).json({message: "ACTUALIZADO CON EXITO"});
            

            // const resp = await UsuariosService.getUserById(id);

            // const user: Usuario = {CORREO: resp[0]['CORREO'], NOMBRE: resp[0]['NOMBRE'], CONTRA: ""};

            // await enviar_mail(user, pass, 2);
            
            //res.status(201).json({message: "ACTUALIZADO CON EXITO"});
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