import { Router } from "express";
import { FirebaseController } from "../controllers/firebase"

const route = Router();

route.post("/registerToken/:id", FirebaseController.registerToken);
route.post("/notification/:id", FirebaseController.sendNotifications);

export default route;