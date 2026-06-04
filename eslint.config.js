//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettier from 'eslint-config-prettier';

export default [
  ...tanstackConfig,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
  },
  {
    rules: {
      semi: ['error', 'always'],
      '@typescript-eslint/semi': ['error', 'always'],

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Node builtin
            ['^node:'],

            // React
            ['^react'],

            // Vite
            ['^vite'],

            // External packages
            ['^@?\\w'],

            // Internal alias
            ['^#/components'],
            ['^#/configs'],
            ['^#/context'],
            ['^#/hooks'],
            ['^#/integrations'],
            ['^#/features'],
            ['^#/utils'],
            ['^#/types'],

            // Parent
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

            // Same folder
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

            // Style
            ['^.+\\.?(css|scss)$'],
          ],
        },
      ],

      'simple-import-sort/exports': 'error',
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },
  {
    ignores: ['eslint.config.js', 'prettier.config.js'],
  },
  prettier,
];
