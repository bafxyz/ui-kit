"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _readmeRaw = _interopRequireDefault(require("./readme.raw.md"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var Button = function Button(_ref) {
  var _ref$innerText = _ref.innerText,
      innerText = _ref$innerText === void 0 ? (0, _addonKnobs.text)('text', 'tap me') : _ref$innerText,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? (0, _addonKnobs.select)('size', _index["default"].SIZE, _index["default"].SIZE.NORMAL) : _ref$size,
      _ref$fit = _ref.fit,
      fit = _ref$fit === void 0 ? (0, _addonKnobs["boolean"])('fit', false) : _ref$fit,
      _ref$round = _ref.round,
      round = _ref$round === void 0 ? (0, _addonKnobs["boolean"])('round', false) : _ref$round,
      _ref$radius = _ref.radius,
      radius = _ref$radius === void 0 ? (0, _addonKnobs.select)('radius', _index["default"].RADIUS, _index["default"].RADIUS.NONE) : _ref$radius,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? (0, _addonKnobs.select)('state', _objectSpread({}, _index["default"].STATE, {
    undefined: undefined
  }), undefined) : _ref$state,
      _ref$scheme = _ref.scheme,
      scheme = _ref$scheme === void 0 ? (0, _addonKnobs.select)('scheme', _index["default"].SCHEME, _index["default"].SCHEME.PRIMARY) : _ref$scheme,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? (0, _addonKnobs.select)('variant', _index["default"].VARIANT, _index["default"].VARIANT.FILL) : _ref$variant;
  return _react["default"].createElement(_index["default"], {
    round: round,
    size: size,
    state: state,
    scheme: scheme,
    variant: variant,
    radius: radius,
    fit: fit
  }, innerText);
};

var opts = {
  notes: {
    markdown: _readmeRaw["default"]
  }
};
(0, _react2.storiesOf)('UI Components|UiButton', module).addDecorator(function (storyFn) {
  return _react["default"].createElement("div", null, storyFn());
}).add('Complex example', function () {
  return _react["default"].createElement(Button, null);
}, opts);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Button, "Button", "/Users/andrei.bunulu/Sites/ui-kit/src/Button/story.tsx");
  reactHotLoader.register(opts, "opts", "/Users/andrei.bunulu/Sites/ui-kit/src/Button/story.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();