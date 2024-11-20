/*module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}*/
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Added for backend compatibility (if necessary)
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Add TypeScript ESLint plugin
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // Enables stricter rules
  ],
  parser: '@typescript-eslint/parser', // Set parser for TypeScript files
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Ensure JSX is supported
    },
  },
  settings: {
    react: {
      version: '18.2', // Ensure correct React version
    },
  },
  plugins: ['react-refresh', '@typescript-eslint'], // Add TypeScript plugin
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Example TypeScript rule
  },
}

