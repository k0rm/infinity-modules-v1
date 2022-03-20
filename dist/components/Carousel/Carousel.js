"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carouselModule = _interopRequireDefault(require("./carousel.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Carousel = _ref => {
  let {
    images,
    size
  } = _ref;
  let len = images.length - 1;
  const [index, setIndex] = (0, _react.useState)(0);
  const [image, setImage] = (0, _react.useState)(images[index]);

  const carouselToggler = direction => {
    direction ? index === len ? setIndex(0) : setIndex(index + 1) : index === 0 ? setIndex(len) : setIndex(index - 1);
    setImage(images[index]);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _carouselModule.default.carousel
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: _carouselModule.default[size],
    onClick: () => carouselToggler(false)
  }, "-"), /*#__PURE__*/_react.default.createElement("div", {
    className: _carouselModule.default.carouselImageContainer
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: "car imgoo",
    className: _carouselModule.default[size]
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: _carouselModule.default[size],
    onClick: () => carouselToggler(true)
  }, "+"));
};

Carousel.propTypes = {
  images: _propTypes.default.arrayOf(_propTypes.default.string),
  size: _propTypes.default.oneOf(["small", "medium", "large"])
};
var _default = Carousel;
exports.default = _default;