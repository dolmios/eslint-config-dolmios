// eslint.config.js
// ESLint v10 Flat Config for TypeScript, React, Next.js projects
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintReact from '@eslint-react/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';
import perfectionist from 'eslint-plugin-perfectionist';
import importPlugin from 'eslint-plugin-import-x';
import customRules, { typescriptTypeAwareRules } from './rules.js';
import globals from 'globals';

export default [
  // Base JavaScript recommended rules
  js.configs.recommended,

  // @eslint-react recommended (React, DOM, web-api, hooks-extra, naming-convention, RSC)
  eslintReact.configs.recommended,

  // Global ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/out/**',
      '**/coverage/**',
      '**/*.min.js',
      '**/public/**',
      '**/storybook-static/**',
      '**/test/**',
      '**/tests/**',
      '**/eslint.config.js',
      '**/eslint.config.mjs',
      '**/eslint.config.cjs',
      '**/next.config.js'
    ],
  },

  // Main configuration for all file types
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        google: true,
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@next/next': nextPlugin,
      'perfectionist': perfectionist,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      'import-x': importPlugin,
    },
    settings: {
      next: { rootDir: './' },
    },
    rules: customRules,
  },

  // TypeScript-specific configuration with project references
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: typescriptTypeAwareRules,
  },
];
