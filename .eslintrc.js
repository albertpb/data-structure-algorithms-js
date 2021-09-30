// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
	},
	env: {
		es6: true,
		node: true,
		"jest/globals": true,
	},
	plugins: ["prettier", "jest", "import"],
	extends: [
		"eslint:recommended",
		"airbnb-base",
		"prettier",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	// add your custom rules here
	rules: {
		"lines-between-class-members": "off",
		"arrow-parens": "off",
		indent: "off",
		"no-constant-condition": "off",
		"new-cap": "off",
		"no-tabs": "off",
		"no-restricted-syntax": "off",
		"no-console": "off",
		"no-underscore-dangle": "off",
		"no-plusplus": "off",
		"class-methods-use-this": "off",
		"no-param-reassign": "off",
		"consistent-return": "off",
		"prefer-destructuring": "off",
		"import/no-cycle": "off",
		"no-await-in-loop": "off",
		"no-loop-func": "off",
		"import/prefer-default-export": "off",
		"global-require": "off",
		"import/no-unresolved": "error",
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: false,
				optionalDependencies: false,
				peerDependencies: false,
			},
		],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				ts: "never",
				mjs: "never",
			},
		],
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts"],
		},
		"import/resolver": {
			typescript: {},
		},
	},
};
