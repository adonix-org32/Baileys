
// eslint.config.js
const globals = require('globals');
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-empty': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off', // Too many to fix right now
      'no-case-declarations': 'off', // Legacy code uses this pattern
      '@typescript-eslint/no-unused-expressions': 'off', // Legacy code uses this pattern
      '@typescript-eslint/ban-ts-comment': 'off', // Legacy code uses @ts-ignore
      'no-prototype-builtins': 'off', // Legacy code uses this pattern
      'no-redeclare': 'off', // Has one error in messages-media.js
      '@typescript-eslint/no-this-alias': 'off', // Legacy code uses this pattern
      'no-fallthrough': 'off',
      '@typescript-eslint/no-empty-object-type': 'warn', // Let's warn for now
      'no-extra-boolean-cast': 'warn',
      'no-useless-escape': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
    },
  },
);
