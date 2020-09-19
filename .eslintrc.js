module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'rules': {
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': 'warn',
    'key-spacing': 'warn',
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'quotes': ['error', 'single'],
    'react/prop-types': 'warn',
    'semi': ['error', 'always'],
  },
};
