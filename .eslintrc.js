module.exports = {
  parser: '@typescript-eslint/parser', // Use TypeScript parser for ESLint
  extends: [
    'eslint:recommended', // Apply ESLint's recommended rules
    'plugin:react/recommended', // Apply React-specific linting rules
    'plugin:@typescript-eslint/recommended', // Apply TypeScript-specific linting rules
    'plugin:prettier/recommended', // Display Prettier formatting issues as ESLint errors
    'next/core-web-vitals', // Include Next.js specific rules for core web vitals
  ],
  plugins: ['@typescript-eslint', 'react'], // Use TypeScript and React plugins
  rules: {
    'prettier/prettier': ['error'], // Enforce Prettier formatting as ESLint errors
    'react/react-in-jsx-scope': 'off', // Disable the rule for React in scope (not needed in Next.js)
    // Add other custom rules here as needed
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the installed React version
    },
  },
};

