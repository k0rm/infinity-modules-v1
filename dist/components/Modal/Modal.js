"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _modalModule = _interopRequireDefault(require("./modal.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = _ref => {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  return isOpen === true ? /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.modal
  }, children, /*#__PURE__*/_react.default.createElement("button", {
    className: _modalModule.default.modalToggler,
    onClick: onClose
  }, "CLICK ME")) : /*#__PURE__*/_react.default.createElement("div", {
    className: "modalNo"
  });
};

Modal.Title = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.title
  }, children);
};

Modal.Body = _ref3 => {
  let {
    children
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.body
  }, children);
};

Modal.Footer = _ref4 => {
  let {
    children
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.footer
  }, children);
};

Modal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  children: _propTypes.default.arrayOf(_propTypes.default.node)
};
var _default = Modal;
exports.default = _default;