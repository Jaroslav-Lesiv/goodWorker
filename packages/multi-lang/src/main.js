'use strict';

var _createClass = (function() {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ('value' in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function(Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
})();

var _typeof =
	typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
		? function(obj) {
				return typeof obj;
		  }
		: function(obj) {
				return obj &&
					typeof Symbol === 'function' &&
					obj.constructor === Symbol &&
					obj !== Symbol.prototype
					? 'symbol'
					: typeof obj;
		  };

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		);
	}
	return call && (typeof call === 'object' || typeof call === 'function')
		? call
		: self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== 'function' && superClass !== null) {
		throw new TypeError(
			'Super expression must either be null or a function, not ' +
				typeof superClass
		);
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
	if (superClass)
		Object.setPrototypeOf
			? Object.setPrototypeOf(subClass, superClass)
			: (subClass.__proto__ = superClass);
}

var _extends =
	Object.assign ||
	function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};
var React = require('react');

// statics handler
var hoistStatics = require('hoist-non-react-statics');

var language = 'pt';
var id = 0;

var subscribes = {};

var translations = {};

function subscribe(cb) {
	var newId = id;
	subscribes[newId] = cb;
	id += 1;
	return newId;
}

function unsubscribe(id) {
	delete subscribes[id];
}

function triggerSubscriptions() {
	Object.keys(subscribes).forEach(function(id) {
		new Promise(function(resolve) {
			subscribes[id]();
			resolve();
		}).then();
	});
}

function setDefaultLanguage(lang) {
	language = lang;
}

function setDefaultTranslations(userTranslations) {
	if (Object.keys(translations).length !== 0) {
		setTranslations(userTranslations);
		return;
	}
	translations = userTranslations;
}
function setTranslations(userTranslations) {
	translations = userTranslations;
	triggerSubscriptions();
}

function setLanguage(lang) {
	language = lang;
	triggerSubscriptions();
}

function getLanguage() {
	return language;
}

function t(path, args) {
	var translationKeys = path.split('.');
	var translation = '';
	var translationObj = translations[language];

	translationKeys.forEach(function(key) {
		var temp = translationObj[key];
		if (_typeof(translationObj[key]) === 'object') {
			translationObj = translationObj[key];
		}
		if (typeof temp === 'string') {
			translation = temp;
		}
	});

	if (translation) {
		if (args) {
			Object.keys(args).forEach(function(key) {
				translation = translation.replace(
					'{' + key + '}',
					args ? args[key] : ''
				);
			});
		}
	} else {
		return path;
	}

	return translation;
}

function translate(Component) {
	var TranslatedComponet = (function(_React$Component) {
		_inherits(TranslatedComponet, _React$Component);

		function TranslatedComponet() {
			_classCallCheck(this, TranslatedComponet);

			return _possibleConstructorReturn(
				this,
				(
					TranslatedComponet.__proto__ ||
					Object.getPrototypeOf(TranslatedComponet)
				).apply(this, arguments)
			);
		}

		_createClass(TranslatedComponet, [
			{
				key: 'componentDidMount',
				value: function componentDidMount() {
					var _this2 = this;

					this.id = subscribe(function() {
						return _this2.forceUpdate();
					});
				}
			},
			{
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					unsubscribe(this.id);
				}
			},
			{
				key: 'render',
				value: function render() {
					return React.createElement(
						Component,
						_extends({}, this.props, { t: t })
					);
				}
			}
		]);

		return TranslatedComponet;
	})(React.Component);

	return hoistStatics(TranslatedComponet, Component);
}

module.exports = {
	subscribe: subscribe,
	unsubscribe: unsubscribe,
	setDefaultLanguage: setDefaultLanguage,
	setDefaultTranslations: setDefaultTranslations,
	setTranslations: setTranslations,
	setLanguage: setLanguage,
	getLanguage: getLanguage,
	t: t,
	translate: translate
};
