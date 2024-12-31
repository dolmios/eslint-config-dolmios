# eslint-config-dolmios
> A comprehensive ESLint setup using [@typescript-eslint](https://typescript-eslint.io), integrated with Prettier and tailored TSConfig setups for modern JavaScript and TypeScript projects. 


## Install
```sh
pnpm  add  eslint-config-dolmios
```

## Usage
This ESLint configuration is designed for use with ESLint v9, which uses a flat config format. Follow the steps below to integrate it into your project.

### Setting Up ESLint
1.  **Create an ESLint Configuration File**: In the root of your project, create a file named  `eslint.config.js`.

2.  **Import and Extend the Configuration**: Add the following content to  `eslint.config.js`  to use the  `eslint-config-dolmios`  configuration:


```js
import dolmiosConfig from "eslint-config-dolmios";

export default [
  ...dolmiosConfig,
  // Add any project-specific overrides here
];
```

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
You can view the ESLint configuration in the reference notes: [reference.txt](./reference.txt). 

## Acknowledgments
This configuration leverages several third-party libraries to enhance linting and formatting capabilities:

-   **[@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)**: Provides TypeScript-specific linting rules.
-   **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)**: Enforces the rules of React Hooks.
-   **[eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)**: Static AST checker for accessibility rules on JSX elements.
-   **[eslint-plugin-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next)**: Provides Next.js specific linting rules.
-   **[eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)**: Handles sorting of imports, objects, and other elements for a consistent codebase.
-   **[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)**: Disables ESLint rules that might conflict with Prettier.

## License
This project is licensed under the MIT License.
