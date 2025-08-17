const verificarRol = (...rolesPermitidos) => {
    return (req, res, next) => {
        // Validar que req.user existe (debería existir después del middleware verificarToken)
        if (!req.user) {
            return res.status(401).json({ message: "Token de autenticación requerido" });
        }

        const { rol } = req.user;

        // Validar que el usuario tiene un rol asignado
        if (!rol) {
            return res.status(403).json({ message: "Usuario sin rol asignado" });
        }

        if (!rolesPermitidos.includes(rol)) {
            return res.status(403).json({ message: "Acceso denegado: rol no autorizado" });
        }

        next(); // Si pasa todas las validaciones, continúa
    };
};

export default verificarRol;