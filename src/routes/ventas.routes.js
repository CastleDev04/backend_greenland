import { Router } from "express"
import * as ventaController from "../controllers/ventas.controller.js"
import verificarToken from "../middlewares/auth.middleware.js"
import verificarRol from "../middlewares/verificarRol.middleware.js"

const router = Router()

router.post("/",verificarToken,verificarRol("ADMIN","MODERADOR"), ventaController.createVentas)
router.get("/",verificarToken,verificarRol("ADMIN","MODERADOR"), ventaController.getVentas)
router.get("/:id",verificarToken,verificarRol("ADMIN","MODERADOR"), ventaController.getVentaById)
router.put("/:id",verificarToken,verificarRol("ADMIN","MODERADOR"), ventaController.updateVentaById)
router.delete("/:id",verificarToken,verificarRol("ADMIN","MODERADOR"), ventaController.deleteVentaById)


export default router;