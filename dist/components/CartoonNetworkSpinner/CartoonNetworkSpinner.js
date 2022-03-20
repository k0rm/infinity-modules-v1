"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cartoonnetworkModule = _interopRequireDefault(require("./cartoonnetwork.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CartoonNetworkSpinner = _ref => {
  let {
    interval
  } = _ref;
  const characters = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6sLS8XYMxKXulaxkhgtsqwlIiR0Oz4r_20Q&usqp=CAU", "https://m.media-amazon.com/images/M/MV5BZjQyNTZiYmItNmIwYi00MmY1LTgzMjItNGUyMjY1NzM1MmFmXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg", "https://w7.pngwing.com/pngs/130/417/png-transparent-eddy-current-cartoon-network-ed-edd-n-eddy-television-child-hand.png"];
  const [character, setCharacter] = (0, _react.useState)(characters[0]);
  (0, _react.useEffect)(() => {
    let index = 0;
    let interv = interval * 1000;
    setInterval(() => {
      index += 1;
      setCharacter(characters[index]);

      if (index === 2) {
        index = -1;
      }
    }, interv);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _cartoonnetworkModule.default.CartoonNetworkSpinner
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _cartoonnetworkModule.default.imageContainer
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: character,
    alt: "fjeiwjfiw",
    className: _cartoonnetworkModule.default.cn
  })));
};

CartoonNetworkSpinner.propTypes = {
  interval: _propTypes.default.number
};
var _default = CartoonNetworkSpinner;
exports.default = _default;