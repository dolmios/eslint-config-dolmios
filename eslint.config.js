// eslint.config.js
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import perfectionist from 'eslint-plugin-perfectionist';
import customRules from './rules.js';
import globals from 'globals';

export default [
  js.configs.recommended,
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
      '**/tests/**'
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
        tsconfigRootDir: '.',
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
      'react': react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      react: { version: 'detect' },
      next: { rootDir: './' },
    },
    rules: customRules,
  },
];
