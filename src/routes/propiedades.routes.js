import { Router } from "express"
import * as propiedadesController from "../controllers/propiedades.controller.js"
import verificarToken from "../middlewares/auth.middleware.js"
import verificarRol from "../middlewares/verificarRol.middleware.js"

const router = Router()

router.post("/",verificarToken,verificarRol("ADMIN","MODERADOR"), propiedadesController.createPropiedades)
router.get("/", propiedadesController.getPropiedades)
router.get("/:id", propiedadesController.getPropiedadById)
router.put("/:id",verificarToken,verificarRol("ADMIN","MODERADOR"), propiedadesController.updatePropiedadById)
router.delete("/:id",verificarToken,verificarRol("ADMIN","MODERADOR"), propiedadesController.deletePropiedadById)


export default router;