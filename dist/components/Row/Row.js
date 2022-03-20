"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rowModule = _interopRequireDefault(require("./row.module.css"));

var _Col = _interopRequireDefault(require("../Col/Col"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Row = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _rowModule.default.Row
  }, children.map(item => {
    return /*#__PURE__*/_react.default.createElement(_Col.default, {
      key: item._source.lineNumber,
      size: item.props.size
    });
  }));
};

Row.propTypes = {
  children: _propTypes.default.arrayOf(_propTypes.default.node)
};
var _default = Row;
exports.default = _default;