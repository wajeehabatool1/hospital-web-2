export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    env: {
      node: true,
      jest: true,
    },
    rules: {
      // Add any specific rules here
    },
  },
];
