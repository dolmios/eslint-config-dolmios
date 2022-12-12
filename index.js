module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['sort-keys-fix', '@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/quotes': 0,
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-blocks': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/space-infix-ops': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'camelcase': ['error', { properties: 'never' }],
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',
    'curly': 0,
    'dot-location': 'off',
    'eol-last': 'off',
    'func-call-spacing': 'off',
    'func-names': ['error', 'as-needed'],
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'generator-star': 'off',
    'generator-star-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/export': 'error',
    'import/first': 'warn',
    'import/named': 'warn',
    'import/namespace': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'warn',
    'import/order': [
      'error',
      {
        'alphabetize': {
          caseInsensitive: true,
          order: 'asc',
        },
        'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'indent': 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 0,
    'max-len': 0,
    'multiline-ternary': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-arrow-condition': 'off',
    'no-comma-dangle': 'off',
    'no-confusing-arrow': 0,
    'no-console': [
      'warn',
      {
        allow: ['error', 'warn'],
      },
    ],

    'no-continue': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-floating-decimal': 'off',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: false,
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
      },
    ],
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'off',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-reserved-keys': 'off',
    'no-space-before-semi': 'off',
    'no-tabs': 0,
    'no-template-curly-in-string': 'error',
    'no-trailing-spaces': 'off',
    'no-undef': 'off',
    'no-unexpected-multiline': 0,
    'no-unreachable-loop': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        enforceForJSX: true,
      },
    ],
    'no-use-before-define': ['error', { classes: true, functions: false }],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-whitespace-before-property': 'off',
    'no-wrap-func': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    'one-var-declaration-per-line': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'quote-props': 'off',
    'quotes': 0,
    'rest-spread-spacing': 'off',
    'semi': 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
    'space-after-function-name': 'off',
    'space-after-keywords': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-before-function-parentheses': 'off',
    'space-before-keywords': 'off',
    'space-in-brackets': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'error',
    'space-return-throw-case': 'off',
    'space-unary-ops': ['error', { nonwords: false, words: true }],
    'space-unary-word-ops': 'off',
    'spaced-comment': ['error', 'always', { line: { exceptions: ['-'] } }],
    'switch-colon-spacing': 'off',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'vue/html-self-closing': 0,
    'vue/max-len': 0,
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
    'yoda': ['error', 'never'],
  },
};
