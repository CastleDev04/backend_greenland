"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _authMiddleware = _interopRequireDefault(require("./middlewares/auth.middleware.js"));
var _propiedadesRoutes = _interopRequireDefault(require("./routes/propiedades.routes.js"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use((0, _cors["default"])({
  origin: ["http://localhost:5173", "https://greenlandpy.com"],
  credentials: true
}));
app.get("/", function (req, res) {
  res.json("Bienvenido");
});
app.use("/api/propiedades", _propiedadesRoutes["default"]);
app.use("/api/auth", _authRoutes["default"]);
app.get("/api/sistema", _authMiddleware["default"], function (req, res) {
  res, json("Tienes un token de acceso");
});
var _default = exports["default"] = app;