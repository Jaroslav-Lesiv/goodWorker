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
		'no-console': ['error', { allow: ['warn', 'error', 'log', 'info', 'time', 'timeEnd'] }],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		indent: ['error', 'tab'],
		'linebreak-style': ['warn', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	},
	settings: {
		react: {
			// default to "createReactClass"
			pragma: 'React', // Pragma to use, default to "React"
			version: '16.3' // React version, default to the latest React stable release
		},
		propWrapperFunctions: ['forbidExtraProps'] // The names of any functions used to wrap the
		// propTypes object, e.g. `forbidExtraProps`.
		// If this isn't set, any propTypes wrapped in
		// a function will be skipped.
	},
	globals: {
		process: true,
		window: true,
		require: true
	}
};
