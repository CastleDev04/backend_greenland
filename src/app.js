import express from "express"
import morgan from "morgan"
import authRoutes from "./routes/auth.routes.js"
import verificarToken from "./middlewares/auth.middleware.js"
import propiedadesRoutes from "./routes/propiedades.routes.js"
import cors from "cors"
const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use(cors({
  origin: ["http://localhost:5173", "https://greenlandpy.com"],
  credentials: true
}));

app.get("/",(req,res)=>{
    res.json("Bienvenido")
})

app.use("/api/propiedades",propiedadesRoutes)
app.use("/api/auth", authRoutes)

app.get("/api/sistema", verificarToken, (req,res)=>{
    res.json("Tienes un token de acceso")
} )

export default app