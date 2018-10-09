module.exports = {
	ecmaFeatures: {
		modules: true,
		arrowFunctions: true,
		jsx: true,
		classes: true
	},
	env: {
		browser: true,
		es6: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	},
	settings: {
		react: {
			createClass: 'createReactClass', // Regex for Component Factory to use,
			// default to "createReactClass"
			pragma: 'React', // Pragma to use, default to "React"
			version: '15.0', // React version, default to the latest React stable release
			flowVersion: '0.53' // Flow version
		},
		propWrapperFunctions: ['forbidExtraProps'] // The names of any functions used to wrap the
		// propTypes object, e.g. `forbidExtraProps`.
		// If this isn't set, any propTypes wrapped in
		// a function will be skipped.
	}
};
