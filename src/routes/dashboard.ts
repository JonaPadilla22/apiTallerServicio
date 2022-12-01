import { Router } from "express"
import { DashboardController } from "../controllers/dashboard";

const route = Router()

route.get('/', DashboardController.general);

export default route