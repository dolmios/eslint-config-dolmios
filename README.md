# eslint-config-dolmios
> A comprehensive ESLint (10) setup using [@typescript-eslint](https://typescript-eslint.io), integrated with Prettier and tailored TSConfig setups for modern JavaScript and TypeScript projects. This config is designed for my projects, but feel free to use it as a starting point for your own projects.


## Install
```sh
pnpm  add  eslint-config-dolmios
```

### Requirements
- **ESLint** `^10.0.0`
- **React** `>=19` and **react-dom** `>=19` (for the React/JSX rules)
- **TypeScript** `>=5.9` (type-aware rules expect a `tsconfig.json` in your project root)

## Usage
This ESLint configuration is designed for use with ESLint v10, which uses a flat config format. Follow the steps below to integrate it into your project.

### Setting Up ESLint
1.  **Create an ESLint Configuration File**: In the root of your project, create a file named  `eslint.config.js`.

2.  **Import and Extend the Configuration**: Add the following content to  `eslint.config.js`  to use the  `eslint-config-dolmios`  configuration:


```js
import dolmios from "eslint-config-dolmios";

export default [
  ...dolmios,
  // Add any project-specific overrides here
];
```

### Features

- **TypeScript Support**: Comprehensive TypeScript linting with strict type checking
- **React Best Practices**: Rules for React and React Hooks
- **Accessibility**: A11y rules to ensure your app is accessible
- **Next.js Optimization**: Includes Next.js Core Web Vitals rules for performance optimization
- **Code Organization**: Perfectionist plugin for consistent code organization
- **Modern JavaScript**: Enforces modern JavaScript practices

### Next.js Compatibility

Next.js rules (`@next/eslint-plugin-next`) are included by default and work for App Router, Pages Router, and plain React projects alike. They're tuned to be non-disruptive — most run as warnings, and `no-html-link-for-pages` is disabled since it isn't relevant to App Router projects. Re-enable or adjust any of them via project-specific overrides.

---

### Usage with Prettier
Prettier is configured to work seamlessly with this ESLint setup. To include Prettier, add the configuration to your  `package.json`:

```js
"prettier": "eslint-config-dolmios/configs/prettier"
```

#### Extending Prettier
If you need to extend the Prettier configuration, you can do so by creating a  `.prettierrc.js`  file and exporting your modifications:

For more details, refer to the [Prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations).

```js
module.exports = {
  ...require("eslint-config-dolmios/configs/prettier"),
  parser: "babel",
};
```

---

### Usage with TSConfig
This config also exports two TSConfig setups, `base` and `lib` respectively. The _base_ config is generally suitable. To include either, extend your `tsconfig.json`.


```

"extends": "eslint-config-dolmios/configs/tsconfig"

```

  

## Configurations
You can view the fully-resolved ESLint configuration in the reference snapshots: [reference-js.txt](./reference-js.txt) (JavaScript) and [reference-ts.txt](./reference-ts.txt) (TypeScript/React).

## Acknowledgments
This configuration leverages several third-party libraries to enhance linting and formatting capabilities:

-   **[@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)**: Provides TypeScript-specific linting rules.
-   **[@eslint-react/eslint-plugin](https://github.com/Rel1cx/eslint-react)**: Modern React linting (React, DOM, web-api, naming-convention, RSC).
-   **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)**: Enforces the rules of React Hooks.
-   **[eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)**: Import/export hygiene, ordering, and cycle detection.
-   **[eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)**: Static AST checker for accessibility rules on JSX elements.
-   **[eslint-plugin-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next)**: Provides Next.js specific linting rules.
-   **[eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)**: Handles sorting of imports, objects, and other elements for a consistent codebase.
-   **[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)**: Disables ESLint rules that might conflict with Prettier.

## License
This project is licensed under the MIT License.
