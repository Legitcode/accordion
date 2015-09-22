"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Accordion = (function (_React$Component) {
  _inherits(Accordion, _React$Component);

  _createClass(Accordion, null, [{
    key: "propTypes",
    value: {
      children: _react2["default"].PropTypes.node
    },
    enumerable: true
  }]);

  function Accordion(props) {
    var _this = this;

    _classCallCheck(this, Accordion);

    _get(Object.getPrototypeOf(Accordion.prototype), "constructor", this).call(this, props);

    this.expand = function (name) {
      if (_this.state.active === name) {
        _this.setState({ active: null });
      } else {
        _this.setState({ active: name });
      }
    };

    this.state = {
      active: props.active || null
    };
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = _react2["default"].Children.map(this.props.children, function (child) {
        return _react2["default"].cloneElement(child, {
          onClick: _this2.expand,
          active: _this2.state.active === child.props.name ? true : false
        });
      });

      return _react2["default"].createElement(
        "ul",
        { className: "accordion" },
        children
      );
    }
  }]);

  return Accordion;
})(_react2["default"].Component);

exports["default"] = Accordion;
module.exports = exports["default"];