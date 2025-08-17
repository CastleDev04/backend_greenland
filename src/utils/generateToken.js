import jwt from "jsonwebtoken"

const generateToken = (user)=>{
    return (
        jwt.sign(
            {
                id: user.id,
                name: user.nombre,
                email: user.email,
                rol: user.rol
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        )
    )
}

export default generateToken;