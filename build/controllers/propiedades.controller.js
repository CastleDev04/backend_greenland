"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePropiedadById = exports.getPropiedades = exports.getPropiedadById = exports.deletePropiedadById = exports.createPropiedades = void 0;
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _db = _interopRequireDefault(require("../db.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var createPropiedades = exports.createPropiedades = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, fraccionamiento, distrito, finca, padron, cuentaCatastral, manzana, lote, loteamiento, superficie, precioTotal, modalidadPago, cuotas, montoCuota, estadoVenta, entregado, amojonado, limpio, tieneConstruccion, aguaPotable, energiaElectrica, calle, seguridad, beneficiosComunes, requiereExpensas, expensas, restriccionConstrucion, latitud, longitud, linderoNorteMedida, linderoSurMedida, linderoEsteMedida, linderoOesteMedida, linderoNorteCon, linderoSurCon, linderoEsteCon, linderoOesteCon, linderoNorteCalle, linderoSurCalle, linderoEsteCalle, linderoOesteCalle, compradorId, data, propiedad, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _req$body = req.body, fraccionamiento = _req$body.fraccionamiento, distrito = _req$body.distrito, finca = _req$body.finca, padron = _req$body.padron, cuentaCatastral = _req$body.cuentaCatastral, manzana = _req$body.manzana, lote = _req$body.lote, loteamiento = _req$body.loteamiento, superficie = _req$body.superficie, precioTotal = _req$body.precioTotal, modalidadPago = _req$body.modalidadPago, cuotas = _req$body.cuotas, montoCuota = _req$body.montoCuota, estadoVenta = _req$body.estadoVenta, entregado = _req$body.entregado, amojonado = _req$body.amojonado, limpio = _req$body.limpio, tieneConstruccion = _req$body.tieneConstruccion, aguaPotable = _req$body.aguaPotable, energiaElectrica = _req$body.energiaElectrica, calle = _req$body.calle, seguridad = _req$body.seguridad, beneficiosComunes = _req$body.beneficiosComunes, requiereExpensas = _req$body.requiereExpensas, expensas = _req$body.expensas, restriccionConstrucion = _req$body.restriccionConstrucion, latitud = _req$body.latitud, longitud = _req$body.longitud, linderoNorteMedida = _req$body.linderoNorteMedida, linderoSurMedida = _req$body.linderoSurMedida, linderoEsteMedida = _req$body.linderoEsteMedida, linderoOesteMedida = _req$body.linderoOesteMedida, linderoNorteCon = _req$body.linderoNorteCon, linderoSurCon = _req$body.linderoSurCon, linderoEsteCon = _req$body.linderoEsteCon, linderoOesteCon = _req$body.linderoOesteCon, linderoNorteCalle = _req$body.linderoNorteCalle, linderoSurCalle = _req$body.linderoSurCalle, linderoEsteCalle = _req$body.linderoEsteCalle, linderoOesteCalle = _req$body.linderoOesteCalle, compradorId = _req$body.compradorId;
          if (!(!fraccionamiento || !distrito || !superficie)) {
            _context.n = 1;
            break;
          }
          return _context.a(2, res.status(400).json({
            message: "Campos obligatorios faltantes: fraccionamiento, distrito, superficie"
          }));
        case 1:
          _context.p = 1;
          data = {
            fraccionamiento: fraccionamiento,
            distrito: distrito,
            finca: finca,
            padron: padron,
            cuentaCatastral: cuentaCatastral,
            manzana: manzana,
            lote: lote,
            loteamiento: loteamiento,
            superficie: superficie,
            precioTotal: precioTotal,
            modalidadPago: modalidadPago,
            cuotas: cuotas,
            montoCuota: montoCuota,
            estadoVenta: estadoVenta,
            entregado: entregado,
            amojonado: amojonado,
            limpio: limpio,
            tieneConstruccion: tieneConstruccion,
            aguaPotable: aguaPotable,
            energiaElectrica: energiaElectrica,
            calle: calle,
            seguridad: seguridad,
            beneficiosComunes: beneficiosComunes,
            requiereExpensas: requiereExpensas,
            expensas: expensas,
            restriccionConstrucion: restriccionConstrucion,
            latitud: latitud,
            longitud: longitud,
            // Linderos
            linderoNorteMedida: linderoNorteMedida,
            linderoSurMedida: linderoSurMedida,
            linderoEsteMedida: linderoEsteMedida,
            linderoOesteMedida: linderoOesteMedida,
            linderoNorteCon: linderoNorteCon,
            linderoSurCon: linderoSurCon,
            linderoEsteCon: linderoEsteCon,
            linderoOesteCon: linderoOesteCon,
            linderoNorteCalle: linderoNorteCalle,
            linderoSurCalle: linderoSurCalle,
            linderoEsteCalle: linderoEsteCalle,
            linderoOesteCalle: linderoOesteCalle
          }; // Conectar con comprador si se proporciona
          if (compradorId) {
            data.comprador = {
              connect: {
                id: compradorId
              }
            };
          }
          _context.n = 2;
          return _db["default"].lote.create({
            data: data,
            include: {
              comprador: true // Incluir datos del comprador en la respuesta
            }
          });
        case 2:
          propiedad = _context.v;
          return _context.a(2, res.status(201).json({
            message: "Propiedad creada correctamente",
            propiedad: propiedad
          }));
        case 3:
          _context.p = 3;
          _t = _context.v;
          console.error(_t);
          return _context.a(2, res.status(500).json({
            message: "Error al crear la propiedad"
          }));
      }
    }, _callee, null, [[1, 3]]);
  }));
  return function createPropiedades(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getPropiedades = exports.getPropiedades = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var propiedades, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _db["default"].lote.findMany({
            // include: {
            //     comprador: true // Incluye los datos del cliente relacionado
            // }
          });
        case 1:
          propiedades = _context2.v;
          return _context2.a(2, res.status(200).json(propiedades));
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.error(_t2);
          return _context2.a(2, res.status(500).json({
            message: "Error al obtener las propiedades"
          }));
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function getPropiedades(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getPropiedadById = exports.getPropiedadById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var id, propiedad, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          id = req.params.id; // Validar que el ID sea un número válido
          if (!isNaN(parseInt(id))) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, res.status(400).json({
            message: "ID inválido"
          }));
        case 1:
          _context3.p = 1;
          _context3.n = 2;
          return _db["default"].lote.findUnique({
            where: {
              id: parseInt(id)
            },
            include: {
              comprador: true
            }
          });
        case 2:
          propiedad = _context3.v;
          if (propiedad) {
            _context3.n = 3;
            break;
          }
          return _context3.a(2, res.status(404).json({
            message: "Propiedad no encontrada"
          }));
        case 3:
          return _context3.a(2, res.status(200).json(propiedad));
        case 4:
          _context3.p = 4;
          _t3 = _context3.v;
          console.error(_t3);
          return _context3.a(2, res.status(500).json({
            message: "Error al obtener la propiedad"
          }));
      }
    }, _callee3, null, [[1, 4]]);
  }));
  return function getPropiedadById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updatePropiedadById = exports.updatePropiedadById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var id, _req$body2, fraccionamiento, distrito, finca, padron, cuentaCatastral, manzana, lote, loteamiento, superficie, precioTotal, modalidadPago, cuotas, montoCuota, estadoVenta, entregado, amojonado, limpio, tieneConstruccion, aguaPotable, energiaElectrica, calle, seguridad, beneficiosComunes, requiereExpensas, expensas, restriccionConstrucion, latitud, longitud, linderoNorteMedida, linderoSurMedida, linderoEsteMedida, linderoOesteMedida, linderoNorteCon, linderoSurCon, linderoEsteCon, linderoOesteCon, linderoNorteCalle, linderoSurCalle, linderoEsteCalle, linderoOesteCalle, compradorId, data, propiedad, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, fraccionamiento = _req$body2.fraccionamiento, distrito = _req$body2.distrito, finca = _req$body2.finca, padron = _req$body2.padron, cuentaCatastral = _req$body2.cuentaCatastral, manzana = _req$body2.manzana, lote = _req$body2.lote, loteamiento = _req$body2.loteamiento, superficie = _req$body2.superficie, precioTotal = _req$body2.precioTotal, modalidadPago = _req$body2.modalidadPago, cuotas = _req$body2.cuotas, montoCuota = _req$body2.montoCuota, estadoVenta = _req$body2.estadoVenta, entregado = _req$body2.entregado, amojonado = _req$body2.amojonado, limpio = _req$body2.limpio, tieneConstruccion = _req$body2.tieneConstruccion, aguaPotable = _req$body2.aguaPotable, energiaElectrica = _req$body2.energiaElectrica, calle = _req$body2.calle, seguridad = _req$body2.seguridad, beneficiosComunes = _req$body2.beneficiosComunes, requiereExpensas = _req$body2.requiereExpensas, expensas = _req$body2.expensas, restriccionConstrucion = _req$body2.restriccionConstrucion, latitud = _req$body2.latitud, longitud = _req$body2.longitud, linderoNorteMedida = _req$body2.linderoNorteMedida, linderoSurMedida = _req$body2.linderoSurMedida, linderoEsteMedida = _req$body2.linderoEsteMedida, linderoOesteMedida = _req$body2.linderoOesteMedida, linderoNorteCon = _req$body2.linderoNorteCon, linderoSurCon = _req$body2.linderoSurCon, linderoEsteCon = _req$body2.linderoEsteCon, linderoOesteCon = _req$body2.linderoOesteCon, linderoNorteCalle = _req$body2.linderoNorteCalle, linderoSurCalle = _req$body2.linderoSurCalle, linderoEsteCalle = _req$body2.linderoEsteCalle, linderoOesteCalle = _req$body2.linderoOesteCalle, compradorId = _req$body2.compradorId; // Validar que el ID sea un número válido
          if (!isNaN(parseInt(id))) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2, res.status(400).json({
            message: "ID inválido"
          }));
        case 1:
          _context4.p = 1;
          data = {
            fraccionamiento: fraccionamiento,
            distrito: distrito,
            finca: finca,
            padron: padron,
            cuentaCatastral: cuentaCatastral,
            manzana: manzana,
            lote: lote,
            loteamiento: loteamiento,
            superficie: superficie,
            precioTotal: precioTotal,
            modalidadPago: modalidadPago,
            cuotas: cuotas,
            montoCuota: montoCuota,
            estadoVenta: estadoVenta,
            entregado: entregado,
            amojonado: amojonado,
            limpio: limpio,
            tieneConstruccion: tieneConstruccion,
            aguaPotable: aguaPotable,
            energiaElectrica: energiaElectrica,
            calle: calle,
            seguridad: seguridad,
            beneficiosComunes: beneficiosComunes,
            requiereExpensas: requiereExpensas,
            expensas: expensas,
            restriccionConstrucion: restriccionConstrucion,
            latitud: latitud,
            longitud: longitud,
            // Linderos
            linderoNorteMedida: linderoNorteMedida,
            linderoSurMedida: linderoSurMedida,
            linderoEsteMedida: linderoEsteMedida,
            linderoOesteMedida: linderoOesteMedida,
            linderoNorteCon: linderoNorteCon,
            linderoSurCon: linderoSurCon,
            linderoEsteCon: linderoEsteCon,
            linderoOesteCon: linderoOesteCon,
            linderoNorteCalle: linderoNorteCalle,
            linderoSurCalle: linderoSurCalle,
            linderoEsteCalle: linderoEsteCalle,
            linderoOesteCalle: linderoOesteCalle
          }; // Manejar relación con comprador
          if (compradorId) {
            data.comprador = {
              connect: {
                id: compradorId
              }
            };
          }
          _context4.n = 2;
          return _db["default"].lote.update({
            where: {
              id: parseInt(id)
            },
            data: data,
            include: {
              comprador: true
            }
          });
        case 2:
          propiedad = _context4.v;
          return _context4.a(2, res.status(200).json({
            message: "Propiedad actualizada correctamente",
            propiedad: propiedad
          }));
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
          console.error(_t4);
          return _context4.a(2, res.status(500).json({
            message: "Error al actualizar la propiedad"
          }));
      }
    }, _callee4, null, [[1, 3]]);
  }));
  return function updatePropiedadById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deletePropiedadById = exports.deletePropiedadById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var id, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          id = req.params.id; // Validar que el ID sea un número válido
          if (!isNaN(parseInt(id))) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, res.status(400).json({
            message: "ID inválido"
          }));
        case 1:
          _context5.p = 1;
          _context5.n = 2;
          return _db["default"].lote["delete"]({
            where: {
              id: parseInt(id)
            }
          });
        case 2:
          return _context5.a(2, res.status(200).json({
            message: "Propiedad eliminada correctamente"
          }));
        case 3:
          _context5.p = 3;
          _t5 = _context5.v;
          console.error(_t5);

          // Manejar caso específico cuando el registro no existe
          if (!(_t5.code === 'P2025')) {
            _context5.n = 4;
            break;
          }
          return _context5.a(2, res.status(404).json({
            message: "Propiedad no encontrada"
          }));
        case 4:
          return _context5.a(2, res.status(500).json({
            message: "Error al eliminar la propiedad"
          }));
      }
    }, _callee5, null, [[1, 3]]);
  }));
  return function deletePropiedadById(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();