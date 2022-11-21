import { Request, Response } from "express";
import { FirebaseService } from "../services/firebase";

class FirebaseController {
    static registerToken = async (req:Request, res:Response) => { 
        try{
            //const registrationToken = body.token;
            const id = req.params.id;
            const token = req.body.TOKEN;

            const response = await FirebaseService.registerTokenUser({ID_USUARIO: id, TOKEN: token});

            res.json(response);
        }catch(e){
            res.send(e);
        }
    }

    static deleteToken = async (req:Request, res:Response) => { 
        try{
            const token = req.body.TOKEN;

            const response = await FirebaseService.deleteToken(token);

            res.json(response);
        }catch(e){
            res.send(e);
        }
    }

    static sendNotifications = async (req:Request, res:Response) => { 
        try{
            //const registrationToken = body.token;
            const id = req.params.id;
            const notification = req.body.NOTIFICATION;

            await FirebaseService.sendNotificationUser(id, notification);


            res.json("ENVIADO");
        }catch(e){
            res.send(e);
        }
    }
}

export { FirebaseController };