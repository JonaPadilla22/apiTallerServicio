import { Router } from "express";
import { revisarSesion } from "../middlewares/sesion";
import auth from "./auth";
import usuarios from "./usuarios";
import vehiculos from "./vehiculos"
import refacciones from "./refacciones";
import servicios from "./servicios";
import manoDeObra from "./manoDeObra";
import marca from "./marca";
import modelo from "./modelo";
import personType from "./tipoPersona";
import repairType from "./tipoRefaccion";
import serviceType from "./tipoServicio";
import userType from "./tipoUsuario";
import firebase from "./firebase";
import dashboard from "./dashboard";

const routes = Router();

routes.use("/auth", auth);
routes.use("/usuarios", revisarSesion, usuarios);
routes.use("/vehiculos", vehiculos);
routes.use("/refacciones", refacciones);
routes.use("/servicios", servicios);
routes.use("/manoDeObra", manoDeObra);
routes.use("/marca", marca);
routes.use("/modeloVehiculo", modelo);
routes.use("/tipoPersona", personType);
routes.use("/tipoRefaccion", repairType);
routes.use("/tipoServicio", serviceType);
routes.use("/tipoUsuario", userType);
routes.use("/firebase", firebase);
routes.use("/dashboard", dashboard);

export default routes;