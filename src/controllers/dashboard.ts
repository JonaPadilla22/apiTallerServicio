import { Request, Response } from "express";
import { DashboardService } from "../services/dashboard";

class DashboardController {
    static general = async (_req:Request, res:Response) => { 
        try{
            const response = await DashboardService.getDashboardGeneral();
            res.json(response);
        }catch(e){
            res.send(e);
        }
    }
}

export { DashboardController };