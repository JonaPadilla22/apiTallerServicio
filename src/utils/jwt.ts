import {sign, verify} from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "llave_secreta";

const generarToken = (id: string) => {
    const jwt = sign({ id }, JWT_SECRET,);
    return jwt;
}

const verificarToken = (jwt: string) => {
    return verify(jwt, JWT_SECRET);
};

export { generarToken, verificarToken };