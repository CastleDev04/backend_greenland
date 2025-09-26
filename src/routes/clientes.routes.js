import { Router } from "express"
import * as clienteController from "../controllers/cliente.controller.js"
import verificarToken from "../middlewares/auth.middleware.js"
import verificarRol from "../middlewares/verificarRol.middleware.js"

const router = Router()

router.post("/",verificarToken,verificarRol("ADMIN","MODERADOR"), clienteController.createClientes)
router.get("/",verificarToken,verificarRol("ADMIN","MODERADOR"), clienteController.getClientes)
router.get("/:id",verificarToken,verificarRol("ADMIN","MODERADOR"), clienteController.getClienteById)
router.put("/:id",verificarToken,verificarRol("ADMIN","MODERADOR"), clienteController.updateClienteById)
router.delete("/:id",verificarToken,verificarRol("ADMIN","MODERADOR"), clienteController.deleteClienteById)


export default router;