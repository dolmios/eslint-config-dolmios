module.exports = {
  extends: [
    "plugin:import/recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["typescript-sort-keys"],
  rules: {
    "@next/next/no-html-link-for-pages": ["off"],
    "typescript-sort-keys/interface": ["warn"],
    "typescript-sort-keys/string-enum": ["warn"],
    "@typescript-eslint/explicit-function-return-type": ["warn"],
    "@typescript-eslint/no-non-null-assertion": ["warn"],
    "jsx-a11y/aria-role": ["warn"],
    "jsx-a11y/autocomplete-valid": ["warn"],
    "jsx-a11y/click-events-have-key-events": ["warn"],
    "jsx-a11y/heading-has-content": ["warn"],
    "jsx-a11y/iframe-has-title": ["warn"],
    "jsx-a11y/html-has-lang": ["warn"],
    "jsx-a11y/img-redundant-alt": ["warn"],
    "jsx-a11y/interactive-supports-focus": ["warn"],
    "jsx-a11y/label-has-associated-control": ["warn"],
    "jsx-a11y/lang": ["warn"],
    "jsx-a11y/media-has-caption": ["warn"],
    "jsx-a11y/mouse-events-have-key-events": ["warn"],
    "jsx-a11y/no-access-key": ["warn"],
    "jsx-a11y/no-autofocus": ["warn"],
    "jsx-a11y/no-distracting-elements": ["warn"],
    "jsx-a11y/no-redundant-roles": ["warn"],
    "jsx-a11y/no-static-element-interactions": ["warn"],
    "jsx-a11y/scope": ["warn"],
    "import/first": ["warn"],
    "react/button-has-type": ["warn"],
    "react/destructuring-assignment": ["warn"],
    "react/jsx-boolean-value": ["warn"],
    "react/jsx-handler-names": ["warn"],
    "react/jsx-no-bind": [
      "warn",
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
      },
    ],
    "react/jsx-no-useless-fragment": ["warn"],
    "react/jsx-pascal-case": ["warn"],
    "react/jsx-sort-props": [
      "warn",
      {
        ignoreCase: true,
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
        multiline: "ignore",
        locale: "auto",
      },
    ],
    "react/no-access-state-in-setstate": ["warn"],
    "react/no-arrow-function-lifecycle": ["warn"],
    "react/no-danger": ["warn"],
    "react/no-invalid-html-attribute": ["warn"],
    "react/no-set-state": ["warn"],
    "react/no-this-in-sfc": ["warn"],
    "react/no-typos": ["warn"],
    "react/no-unused-state": ["warn"],
    "react/self-closing-comp": ["warn"],
    "react/sort-comp": ["warn"],
    "react/style-prop-object": ["warn"],
    "react/void-dom-elements-no-children": ["warn"],
    "import/order": [
      "warn",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always",
        warnOnUnassignedImports: false,
      },
    ],
    "no-alert": ["warn"],
    "no-console": ["warn"],
    "no-empty": ["warn"],
    "no-duplicate-imports": ["warn"],
    "no-eq-null": ["warn"],
    "no-eval": ["warn"],
    "no-extra-bind": ["warn"],
    "no-extra-label": ["warn"],
    "no-invalid-this": ["warn"],
    "no-iterator": ["warn"],
    "no-label-var": ["warn"],
    "no-labels": ["warn"],
    "no-lone-blocks": ["warn"],
    "no-multi-str": ["warn"],
    "no-new": ["warn"],
    "no-octal-escape": ["warn"],
    "no-proto": ["warn"],
    "no-template-curly-in-string": ["warn"],
    "no-unreachable-loop": ["warn"],
    "no-unused-expressions": ["warn"],
    "no-useless-call": ["warn"],
    "no-useless-concat": ["warn"],
    "no-useless-escape": ["warn"],
    "no-useless-return": ["warn"],
    "no-use-before-define": ["warn"],
    yoda: ["warn"],
  },
  settings: {
    next: {
      rootDir: "./",
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["next-env.d.ts", "next.config.js"],
};
