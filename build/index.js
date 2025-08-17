"use strict";

var _app = _interopRequireDefault(require("./app.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var port = process.env.PORT || 4000;
_app["default"].listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});