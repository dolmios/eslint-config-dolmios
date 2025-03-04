// rules.js - Custom ESLint rules

// TypeScript specific rules
const typescriptRules = {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-unused-vars': [
        'warn',
        { args: 'none', ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/prefer-as-const': 'warn',
    'no-unused-vars': 'off',
};

// Accessibility rules
const a11yRules = {
    'jsx-a11y/aria-role': 'warn',
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
    'jsx-a11y/scope': 'warn',
};

// React specific rules
const reactRules = {
    'react/button-has-type': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/jsx-no-bind': [
        'warn',
        { allowArrowFunctions: true, ignoreRefs: true },
    ],
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
    'react/no-arrow-function-lifecycle': 'warn',
    'react/no-danger': 'warn',
    'react/no-invalid-html-attribute': 'warn',
    'react/no-set-state': 'warn',
    'react/no-this-in-sfc': 'warn',
    'react/no-typos': 'warn',
    'react/no-unused-state': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'warn',
    'react/style-prop-object': 'warn',
    'react/void-dom-elements-no-children': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
};

// Next.js rules
const nextRules = {
    '@next/next/no-html-link-for-pages': 'warn',
    '@next/next/no-img-element': 'warn',
    '@next/next/no-unwanted-polyfillio': 'warn',
    '@next/next/no-css-tags': 'warn',
    '@next/next/no-sync-scripts': 'warn',
    '@next/next/google-font-display': 'warn',
    '@next/next/google-font-preconnect': 'warn',
    '@next/next/next-script-for-ga': 'warn',
    '@next/next/no-page-custom-font': 'warn',
};

// Perfectionist rules
const perfectionistRules = {
    'perfectionist/sort-objects': ['warn', { order: 'asc', type: 'natural' }],
    'perfectionist/sort-imports': ['warn', { order: 'asc', type: 'natural' }],
};

// General JavaScript rules
const generalRules = {
    'consistent-this': ['warn', 'self'],
    'eqeqeq': 'warn',
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-duplicate-imports': 'warn',
    'no-empty': 'warn',
    'no-eq-null': 'warn',
    'no-eval': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-invalid-this': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-mixed-requires': ['warn', { grouping: true, allowCall: false }],
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': [
        'warn',
        { max: 1, maxBOF: 0, maxEOF: 0 },
    ],
    'no-new': 'warn',
    'no-octal-escape': 'warn',
    'no-proto': 'warn',
    'no-template-curly-in-string': 'warn',
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
    'prefer-destructuring': ['warn', { array: true, object: true }],
    'yoda': 'warn',
};

// Prettier compatibility rules
const prettierRules = {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
};

// Export all rule groups combined
export default {
    ...typescriptRules,
    ...a11yRules,
    ...reactRules,
    ...nextRules,
    ...perfectionistRules,
    ...generalRules,
    ...prettierRules,
};
