# eslint-config-dolmios

Linting setup.

### Installation

Ensure that you have `eslint`installed. Then install the package:
```bash
yarn add eslint-config-dolmios
````

### Usage

Populate `.eslintrc` with the following, and code away.

```json
{
  "extends": ["dolmios"]
}
````

### Usage with Prettier

Prettier is configured to work nicely with this config, though is an optional inclusion. If you'd like to include the config, you can add it
to `package.json`.

```json
"prettier": "eslint-config-dolmios/.prettierrc.json"
```
