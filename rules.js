// rules.js - Custom ESLint rules

// TypeScript specific rules
const typescriptRules = {
    '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn',
    '@typescript-eslint/no-for-in-array': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-unused-vars': [
        'warn',
        { args: 'none', argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/prefer-as-const': 'warn',
    'no-unused-vars': 'off',
};

// TypeScript type-aware rules (require project: './tsconfig.json' in parserOptions)
export const typescriptTypeAwareRules = {
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'warn',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'off', // Too noisy, often false positives with complex types
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'off', // Very common pattern, too noisy for existing codebases
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off', // Too strict, breaks styled-components and many common patterns
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
};

// Accessibility rules
const a11yRules = {
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/autocomplete-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/html-has-lang': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/interactive-supports-focus': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/lang': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',
};

// React specific rules
const reactRules = {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/button-has-type': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/jsx-key': 'error',
    'react/jsx-no-bind': [
        'warn',
        { allowArrowFunctions: true, ignoreRefs: true },
    ],
    'react/jsx-no-constructed-context-values': 'warn',
    'react/jsx-no-leaked-render': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-sort-props': [
        'warn',
        {
            'callbacksLast': true,
            'ignoreCase': true,
            'noSortAlphabetically': false,
            'reservedFirst': true,
            'shorthandFirst': false,
            'shorthandLast': false,
        }
    ],
    'react/no-access-state-in-setstate': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-arrow-function-lifecycle': 'warn',
    'react/no-children-prop': 'warn',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/no-invalid-html-attribute': 'warn',
    'react/no-object-type-as-default-prop': 'warn',
    'react/no-render-return-value': 'warn',
    'react/no-set-state': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-this-in-sfc': 'warn',
    'react/no-typos': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'warn',
    'react/no-unused-state': 'warn',
    'react/no-unstable-nested-components': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'warn',
    'react/style-prop-object': 'warn',
    'react/void-dom-elements-no-children': 'warn',
};

// Next.js rules
const nextRules = {
    '@next/next/google-font-display': 'warn',
    '@next/next/google-font-preconnect': 'warn',
    '@next/next/next-script-for-ga': 'warn',
    '@next/next/no-css-tags': 'warn',
    '@next/next/no-head-element': 'warn',
    '@next/next/no-head-import-in-document': 'warn',
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-img-element': 'warn',
    '@next/next/no-page-custom-font': 'warn',
    '@next/next/no-styled-jsx-in-document': 'warn',
    '@next/next/no-sync-scripts': 'warn',
    '@next/next/no-unwanted-polyfillio': 'warn',
};

// Perfectionist rules - takes priority for all sorting
const perfectionistRules = {
    'perfectionist/sort-imports': ['warn', { order: 'asc', type: 'natural' }],
    'perfectionist/sort-objects': ['warn', { order: 'asc', type: 'natural' }],
};

// General JavaScript rules
const generalRules = {
    'consistent-this': ['warn', 'self'],
    'eqeqeq': 'warn',
    'no-alert': 'error',
    'no-await-in-loop': 'warn', // Performance concern - sequential processing may be intentional (rate limits, dependencies)
    'no-console': 'warn',
    'no-duplicate-imports': ['warn', { allowSeparateTypeImports: true }],
    'no-empty': 'warn',
    'no-eq-null': 'warn',
    'no-eval': 'error',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-implicit-coercion': 'warn',
    'no-invalid-this': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-mixed-requires': ['warn', { allowCall: false, grouping: true }],
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': [
        'warn',
        { max: 1, maxBOF: 0, maxEOF: 0 },
    ],
    'no-new': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal-escape': 'warn',
    'no-param-reassign': ['warn', { props: false }],
    'no-promise-executor-return': 'warn',
    'no-proto': 'warn',
    // Note: no-restricted-imports and no-restricted-syntax require configuration to be effective
    // They can be configured per-project to restrict specific imports or syntax patterns
    // Removed from default config - add back per-project if needed with specific restrictions
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'warn',
    'no-unreachable-loop': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
    'no-use-before-define': 'warn',
    'no-useless-backreference': 'warn',
    'no-useless-call': 'warn',
    'no-useless-catch': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'error',
    'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
        { blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var'] },
    ],
    'prefer-const': 'warn',
    'prefer-destructuring': ['warn', { array: true, object: true }],
    'prefer-promise-reject-errors': 'warn',
    'require-atomic-updates': 'warn',
    'yoda': 'warn',
};

// Prettier compatibility rules
const prettierRules = {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
};

// Export all rule groups combined
// Note: perfectionistRules should come after generalRules to take priority
export default {
    ...typescriptRules,
    ...a11yRules,
    ...reactRules,
    ...nextRules,
    ...generalRules,
    ...prettierRules,
    ...perfectionistRules, // Perfectionist takes priority for sorting
};
