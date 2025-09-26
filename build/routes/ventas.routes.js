"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var ventaController = _interopRequireWildcard(require("../controllers/ventas.controller.js"));
var _authMiddleware = _interopRequireDefault(require("../middlewares/auth.middleware.js"));
var _verificarRolMiddleware = _interopRequireDefault(require("../middlewares/verificarRol.middleware.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var router = (0, _express.Router)();
router.post("/", _authMiddleware["default"], (0, _verificarRolMiddleware["default"])("ADMIN", "MODERADOR"), ventaController.createVentas);
router.get("/", _authMiddleware["default"], (0, _verificarRolMiddleware["default"])("ADMIN", "MODERADOR"), ventaController.getVentas);
router.get("/:id", _authMiddleware["default"], (0, _verificarRolMiddleware["default"])("ADMIN", "MODERADOR"), ventaController.getVentaById);
router.put("/:id", _authMiddleware["default"], (0, _verificarRolMiddleware["default"])("ADMIN", "MODERADOR"), ventaController.updateVentaById);
router["delete"]("/:id", _authMiddleware["default"], (0, _verificarRolMiddleware["default"])("ADMIN", "MODERADOR"), ventaController.deleteVentaById);
var _default = exports["default"] = router;