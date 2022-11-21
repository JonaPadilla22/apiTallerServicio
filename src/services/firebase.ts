import { connection } from "../database";
import admin from "../firebase-config";

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24,
  };
  
class FirebaseService {
    static registerTokenUser = async (item: any) => {
        let [rows] = await connection.query('SELECT COUNT(*) FROM token_usuario WHERE token = ?',[item.TOKEN]);
        var count = rows[0]['COUNT(*)'];
        if(count == 0){   
            await connection.query('INSERT INTO token_usuario SET ?', [item]);
            return "TOKEN REGISTRADO";
        }else{
            return "TOKEN PREVIAMENTE REGISTRADO";
        }     
    }; 
    
    static deleteToken = async (token: string) => {
        await connection.query('DELETE FROM token_usuario WHERE token = ?', [token]);
        return "ELIMINADO CORRECTAMENTE";
    };

    static sendNotificationUser = async (id: string, notification: any) => {
        //obtener tokens de id usuario
        let [rows] = await connection.query('SELECT token FROM token_usuario WHERE id_usuario = ?', [id]);
        let tokens = rows.map((r: any) => {
            return r;
        });
       
        //ASIGNA MENSAJE DE NOTIFICACION ENVIADO
        const message_notification = {
            notification: notification
        };
        const options = notification_options;
    
        //ciclo de cada token hacer el envio de la notif
        for(var z=0; z<tokens.length;z++){
            admin
            .messaging()
            .sendToDevice(tokens[z].token, message_notification, options)
        }  
        // .then((response: any) => {
        //     res
        //     .status(200)
        //     .send(
        //         `Notification sent successfully ${response.data}`
        //     );
        // })
        // .catch((error: any) => {
        //     console.log(error);
        // }); 
    };   
}

export { FirebaseService };