const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat();

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        console: 'readonly',
        renderMathInElement: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Core recommended rules
      'no-unused-vars': 'error',
      'no-undef': 'error',
      // React recommended rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      // Add more custom rules here
    },
  },
];