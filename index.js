module.exports = {
  extends: [
    "plugin:import/recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  root: true,
  ignorePatterns: ["next-env.d.ts", "next.config.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["typescript-sort-keys"],
  rules: {
    "@next/next/no-html-link-for-pages": ["off"], // Disables Next.js specific rule for HTML links in pages
    "@typescript-eslint/explicit-function-return-type": ["warn"], // Warns about missing return types for functions
    "@typescript-eslint/no-non-null-assertion": ["warn"], // Warns about non-null assertions
    "import/first": ["warn"], // Ensures all imports appear before other statements
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
    ], // Enforces a consistent import order
    "jsx-a11y/aria-role": ["warn"], // Warns about incorrect use of ARIA roles
    "jsx-a11y/autocomplete-valid": ["warn"], // Ensures autocomplete attributes are valid
    "jsx-a11y/click-events-have-key-events": ["warn"], // Ensures clickable elements have keyboard events
    "jsx-a11y/heading-has-content": ["warn"], // Ensures heading elements have content
    "jsx-a11y/html-has-lang": ["warn"], // Ensures HTML has a lang attribute
    "jsx-a11y/iframe-has-title": ["warn"], // Ensures iframes have a title attribute
    "jsx-a11y/img-redundant-alt": ["warn"], // Warns about redundant alt text for images
    "jsx-a11y/interactive-supports-focus": ["warn"], // Ensures interactive elements support focus
    "jsx-a11y/label-has-associated-control": ["warn"], // Ensures labels are associated with controls
    "jsx-a11y/lang": ["warn"], // Ensures elements with a global ARIA role have a valid lang attribute
    "jsx-a11y/media-has-caption": ["warn"], // Ensures media elements have captions
    "jsx-a11y/mouse-events-have-key-events": ["warn"], // Ensures mouse events have corresponding keyboard events
    "jsx-a11y/no-access-key": ["warn"], // Warns about the use of access keys
    "jsx-a11y/no-autofocus": ["warn"], // Warns about the use of autofocus
    "jsx-a11y/no-distracting-elements": ["warn"], // Warns about elements that can be distracting
    "jsx-a11y/no-redundant-roles": ["warn"], // Warns about redundant roles
    "jsx-a11y/no-static-element-interactions": ["warn"], // Warns about static elements with interactive handlers
    "jsx-a11y/scope": ["warn"], // Ensures scope elements have a valid scope attribute
    "no-alert": ["warn"], // Warns about the use of alert
    "no-console": ["warn"], // Warns about the use of console
    "no-duplicate-imports": ["warn"], // Warns about duplicate imports
    "no-empty": ["warn"], // Warns about empty blocks
    "no-eq-null": ["warn"], // Warns about comparisons with null using == or !=
    "no-eval": ["warn"], // Warns about the use of eval
    "no-extra-bind": ["warn"], // Warns about unnecessary bind calls
    "no-extra-label": ["warn"], // Warns about unnecessary labels
    "no-invalid-this": ["warn"], // Warns about invalid this usage
    "no-iterator": ["warn"], // Warns about the use of the __iterator__ property
    "no-label-var": ["warn"], // Warns about labels that shadow variable names
    "no-labels": ["warn"], // Warns about the use of labels
    "no-lone-blocks": ["warn"], // Warns about unnecessary blocks
    "no-multi-str": ["warn"], // Warns about multi-line strings
    "no-new": ["warn"], // Warns about the use of the new operator with side effects
    "no-octal-escape": ["warn"], // Warns about octal escape sequences
    "no-proto": ["warn"], // Warns about the use of __proto__
    "no-template-curly-in-string": ["warn"], // Warns about template literals misused as string literals
    "no-unreachable-loop": ["warn"], // Warns about loops that don't loop
    "no-unused-expressions": ["warn"], // Warns about unused expressions
    "no-unused-labels": ["warn"], // Warns about unused labels
    "no-useless-backreference": ["warn"], // Warns about unnecessary backreferences in regular expressions
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "none",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_", // Ignores arguments that start with an underscore
      },
    ], // Warns about unused variables, ignoring rest siblings
    "no-useless-catch": ["warn"], // Warns about catch clauses that don't do anything
    "no-use-before-define": ["warn"], // Warns about using variables before they are defined
    "no-useless-call": ["warn"], // Warns about unnecessary calls to .call() and .apply()
    "no-useless-constructor": "warn", // Warns about unnecessary constructor
    "no-useless-concat": ["warn"], // Warns about unnecessary string concatenation
    "no-useless-computed-key": "warn", // Warns about unnecessary computed property keys
    "consistent-this": ["warn", "self"], // Enforces consistent use of `this` with a specific alias
    "no-mixed-requires": ["warn", { grouping: true, allowCall: false }], // Enforces consistent use of `import` and `require`
    "no-useless-escape": ["warn"], // Warns about unnecessary escape characters
    "no-eq-null": "warn", // Warns about comparisons with null using == or !=
    "no-useless-return": ["warn"], // Warns about unnecessary return statements
    "no-multi-spaces": ["warn"], // Warns about multiple spaces
    "no-multiple-empty-lines": [
      "warn",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ], // Limits the number of consecutive empty lines
    "padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        next: "return",
        prev: "*",
      },
      {
        blankLine: "always",
        next: "*",
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "any",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
    ], // Enforces blank lines between statements
    "react/button-has-type": ["warn"], // Ensures buttons have a type attribute
    "react/destructuring-assignment": ["warn"], // Enforces destructuring assignment in component props
    "react/jsx-boolean-value": ["warn"], // Enforces boolean attributes notation in JSX
    "react/jsx-handler-names": ["warn"], // Enforces naming conventions for event handlers
    "react/jsx-no-bind": [
      "warn",
      {
        allowArrowFunctions: true,
        ignoreRefs: true,
      },
    ], // Warns about unnecessary bind calls in JSX
    "react/jsx-no-useless-fragment": ["warn"], // Warns about unnecessary fragments in JSX
    "react/jsx-pascal-case": ["warn"], // Enforces PascalCase for user-defined JSX components
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        ignoreCase: true,
        locale: "auto",
        multiline: "ignore",
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ], // Enforces a consistent order for props in JSX
    "react/no-access-state-in-setstate": ["warn"], // Warns about accessing state in setState
    "react/no-arrow-function-lifecycle": ["warn"], // Warns about using arrow functions in lifecycle methods
    "react/no-danger": ["warn"], // Warns about the use of dangerouslySetInnerHTML
    "react/no-invalid-html-attribute": ["warn"], // Warns about invalid HTML attributes in JSX
    "react/no-set-state": ["warn"], // Warns about the use of setState in class components
    "react/no-this-in-sfc": ["warn"], // Warns about the use of this in stateless functional components
    "react/no-typos": ["warn"], // Warns about typos in component names
    "react/no-unused-state": ["warn"], // Warns about unused state variables
    "react/display-name": ["off"], // Disables the requirement for a display name in React components
    "react/self-closing-comp": ["warn"], // Warns about components that should be self-closing
    "react/sort-comp": ["warn"], // Enforces a consistent order for React component methods
    "react/style-prop-object": ["warn"], // Warns about using strings for the style prop
    "react/void-dom-elements-no-children": ["warn"], // Warns about void DOM elements having children
    "typescript-sort-keys/interface": ["warn"], // Warns about unsorted keys in TypeScript interfaces
    "typescript-sort-keys/string-enum": ["warn"], // Warns about unsorted keys in TypeScript string enums
    yoda: ["warn"], // Enforces a consistent style for Yoda conditions
    "react-hooks/exhaustive-deps": ["off"], // Disables the requirement for exhaustive dependencies in React Hooks
    "no-var": "error", // Enforces the use of const and let over var
    eqeqeq: "warn", // Enforces the use of === and !== over == and !=
    "react-hooks/rules-of-hooks": "error", // Enforces the rules of hooks
    "react-hooks/exhaustive-deps": "warn", // Warns about missing dependencies in hooks
    "@typescript-eslint/explicit-function-return-type": "error", // Requires explicit return types for functions
    "@typescript-eslint/no-unnecessary-type-assertion": "warn", // Warns about unnecessary type assertions
    "prefer-destructuring": ["warn", { array: true, object: true }], // Enforces consistent array and object destructuring
  },
  settings: {
    next: {
      rootDir: "./",
    },
    react: {
      version: "detect",
    },
  },
};
