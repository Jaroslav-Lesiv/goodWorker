module.exports = {
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
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'no-console': [
			'error',
			{ allow: ['warn', 'error', 'log', 'info', 'time', 'timeEnd'] }
		],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		indent: ['off', 'tab'],
		'linebreak-style': ['warn', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-throw-literal': 'warn'
	},
	settings: {
		react: {
			// default to "createReactClass"
			pragma: 'React', // Pragma to use, default to "React"
			version: '16.5' // React version, default to the latest React stable release
		},
		propWrapperFunctions: ['forbidExtraProps'] // The names of any functions used to wrap the
		// propTypes object, e.g. `forbidExtraProps`.
		// If this isn't set, any propTypes wrapped in
		// a function will be skipped.
	},
	globals: {
		process: true,
		window: true,
		require: true,
		module: true,
		global: true,
		it: true,
		describe: true,
		beforeEach: true,
		afterEach: true
	}
};
