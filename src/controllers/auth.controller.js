import prisma from "../db.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js"

exports.register = async (req,res)=>{
    const { nombre, email, password, rol } = req.body;

    try{
        const userExists = await prisma.usuario.findUnique({ where: { email }});

        if(userExists){
            return res.status(400).json({ message: "El usuario que desea registrar ya existe"});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const usuario = await prisma.usuario.create({
            data:{
                nombre,
                email,
                password: hashedPassword,
                rol
            }
        })
        return res.status(201).json({ message: "Usuario registrado correctamente" });
    }catch(err){
        console.error(err);
        return res.status(500).json({ message: "Error al registrar el usuario" });
    }
}

exports.login = async (req,res)=>{
    const { email, password } = req.body;

    try{
        const user = await prisma.usuario.findUnique({ where: { email }});
        
        if(!user){
            return res.status(404).json({ message: "Usuario no encontrado"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({ message: "Contraseña incorrecta"});
        }

        const token = generateToken(user);
        return res.status(200).json({
            message: "Inicio de sesión exitoso",
            token,
            user: {
                id: user.id,
                name: user.nombre,
                email: user.email,
                rol: user.rol
            }
        });
    }catch(err){
        console.error(err);
        return res.status(500).json({ message: "Error al iniciar sesión" });
    }
}