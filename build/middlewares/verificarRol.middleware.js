"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var verificarRol = function verificarRol() {
  for (var _len = arguments.length, rolesPermitidos = new Array(_len), _key = 0; _key < _len; _key++) {
    rolesPermitidos[_key] = arguments[_key];
  }
  return function (req, res, next) {
    // Validar que req.user existe (debería existir después del middleware verificarToken)
    if (!req.user) {
      return res.status(401).json({
        message: "Token de autenticación requerido"
      });
    }
    var rol = req.user.rol;

    // Validar que el usuario tiene un rol asignado
    if (!rol) {
      return res.status(403).json({
        message: "Usuario sin rol asignado"
      });
    }
    if (!rolesPermitidos.includes(rol)) {
      return res.status(403).json({
        message: "Acceso denegado: rol no autorizado"
      });
    }
    next(); // Si pasa todas las validaciones, continúa
  };
};
var _default = exports["default"] = verificarRol;