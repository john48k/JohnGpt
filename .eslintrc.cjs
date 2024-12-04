module.exports = {
  // The root configuration to stop searching for configuration files in parent directories
  root: true,

  // Defines the environment in which the code will run
  env: {
    browser: true, // Specifies that the code is intended for the browser environment
    es2020: true, // Allows parsing of ECMAScript 2020 features
  },

  // Extends the configurations from other sources to enforce common practices
  extends: [
    'eslint:recommended', // Enables recommended ESLint rules
    'plugin:react/recommended', // Enables recommended React rules
    'plugin:react/jsx-runtime', // Enforces rules for using JSX runtime
    'plugin:react-hooks/recommended', // Enforces rules for React Hooks usage
  ],

  // Ignores the specified files and directories when linting
  ignorePatterns: ['dist', '.eslintrc.cjs'], // Ignores the 'dist' directory and '.eslintrc.cjs' configuration file

  // Specifies the parser options for ECMAScript version and module type
  parserOptions: {
    ecmaVersion: 'latest', // Uses the latest ECMAScript version for parsing
    sourceType: 'module', // Indicates that the code is using ES modules
  },

  // Settings related to React (version-specific configurations)
  settings: {
    react: {
      version: '18.2', // Specifies that the code is using React version 18.2
    }
  },

  // Plugins used to extend ESLint's functionality
  plugins: ['react-refresh'], // Adds the react-refresh plugin for handling React fast refresh

  // Custom ESLint rules configuration
  rules: {
    "react/prop-types": "off", // Disables the rule for checking React prop types
    "no-unused-vars": "warn", // Warns about unused variables (does not throw an error)
    'react/jsx-no-target-blank': 'off', // Disables the rule that prevents using `target="_blank"` without `rel="noopener noreferrer"`
    'react-refresh/only-export-components': [
      'warn', // Warns when components are not exported in a way that supports React Refresh
      { allowConstantExport: true }, // Allows constant exports without triggering a warning
    ],
  },
}
