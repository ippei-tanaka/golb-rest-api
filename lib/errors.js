'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SyntaxError = undefined;

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = require('babel-runtime/core-js/object/set-prototype-of');

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _construct = require('babel-runtime/core-js/reflect/construct');

var _construct2 = _interopRequireDefault(_construct);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
        var instance = (0, _construct2.default)(cls, (0, _from2.default)(arguments));
        (0, _setPrototypeOf2.default)(instance, (0, _getPrototypeOf2.default)(this));
        return instance;
    }

    ExtendableBuiltin.prototype = (0, _create2.default)(cls.prototype, {
        constructor: {
            value: cls,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    if (_setPrototypeOf2.default) {
        (0, _setPrototypeOf2.default)(ExtendableBuiltin, cls);
    } else {
        ExtendableBuiltin.__proto__ = cls;
    }

    return ExtendableBuiltin;
}

var WeblogJsError = function (_extendableBuiltin2) {
    (0, _inherits3.default)(WeblogJsError, _extendableBuiltin2);

    function WeblogJsError(message) {
        (0, _classCallCheck3.default)(this, WeblogJsError);

        var _this = (0, _possibleConstructorReturn3.default)(this, (WeblogJsError.__proto__ || (0, _getPrototypeOf2.default)(WeblogJsError)).call(this, message));

        _this.name = _this.constructor.name;
        _this.message = message;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, _this.constructor);
        } else {
            _this.stack = new Error(message).stack;
        }
        return _this;
    }

    (0, _createClass3.default)(WeblogJsError, [{
        key: 'toJSON',
        value: function toJSON() {
            return {
                name: this.name,
                message: this.message
            };
        }
    }]);
    return WeblogJsError;
}(_extendableBuiltin(Error));

var SyntaxError = exports.SyntaxError = function (_WeblogJsError) {
    (0, _inherits3.default)(WeblogJsSyntaxError, _WeblogJsError);

    function WeblogJsSyntaxError(message) {
        (0, _classCallCheck3.default)(this, WeblogJsSyntaxError);
        return (0, _possibleConstructorReturn3.default)(this, (WeblogJsSyntaxError.__proto__ || (0, _getPrototypeOf2.default)(WeblogJsSyntaxError)).call(this, message));
    }

    return WeblogJsSyntaxError;
}(WeblogJsError);