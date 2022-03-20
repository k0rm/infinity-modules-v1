"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colModule = _interopRequireDefault(require("./col.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Col = _ref => {
  let {
    size = 1
  } = _ref;
  let item = "c".concat(size);

  if (!size) {
    item = "c1";
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _colModule.default[item]
  });
};

Col.propTypes = {
  size: _propTypes.default.number
};
var _default = Col;
exports.default = _default;