import jwt from "jsonwebtoken";
import prisma from "../db.js";

const verificarToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Bearer TOKEN

        if (!token) {
            return res.status(401).json({ message: "Token de acceso requerido" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log('Token decodificado:', decoded);
        console.log('ID del token:', decoded.id);
        console.log('Email del token:', decoded.email);
        
        // Obtener usuario actual de la base de datos
        const user = await prisma.usuario.findUnique({
            where: { id: decoded.id },
            select: { id: true, nombre: true, email: true, rol: true } // No incluir password
        });

        if (!user) {
            return res.status(401).json({ message: "Token inválido" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: "Token inválido" });
    }
};

export default verificarToken;