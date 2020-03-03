module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
		wp: "readonly",
		guteblock: "readonly"
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react"],
	rules: {
		/*"no-console": "off",*/
		"react/react-in-jsx-scope": "off",
		"react/display-name": "off",
		"react/prop-types": "off"
	}
};
