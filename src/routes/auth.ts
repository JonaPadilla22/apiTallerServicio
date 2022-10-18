import { Router } from "express"
import { AuthController } from "../controllers/auth"

const route = Router()

route.post('/login', AuthController.loginAuth);

export default route