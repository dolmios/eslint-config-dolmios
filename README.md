# eslint-config-dolmios

> A simple ESLint setup using [@typescript-eslint](https://typescript-eslint.io), with Prettier and a couple TSConfig setup.

## Install

```bash
npm install eslint-config-dolmios
```

## Usage

Populate `.eslintrc` with the following, and code away.

```json
{
  "extends": ["dolmios"]
}
```

Alternatively, you can use `eslintConfig` in `package.json`.

```json
{
  "eslintConfig": {
    "extends": ["dolmios"]
  }
}
```

### Usage with Prettier

Prettier is configured to work nicely with this config, though is an optional inclusion. If you'd like to include the config, you can add it to `package.json`.

```json
"prettier": "eslint-config-dolmios/configs/prettier"
```

#### Extending Prettier

> This method does **not** offer a way to _extend_ the configuration to overwrite some properties from the shared configuration. If you need to do that, import the file in a `.prettierrc.js` file and export the modifications.
> [https://prettier.io/docs/en/](https://prettier.io/docs/en/configuration.html#sharing-configurations)

```js
module.exports = {
  ...require("eslint-config-dolmios/configs/prettier"),
  parser: "babel",
};
```

### Usage with TSConfig

This config also exports two TSConfig setups, `base` and `lib` respectively. The _base_ config is generally suitable. To include either, extend your `tsconfig.json`.

```json
"extends": "eslint-config-dolmios/configs/tsconfig"
```

## Contributing

Feel free to get in touch with feedback, advice or suggestions. See [Conventional Commits](https://gist.github.com/dolmios/0e33c579a500d87fc6f44df6cde97259) for new contributors.

## Acknowledgments

- [eslint-plugin-sort-keys-fix](https://github.com/leo-buneev/eslint-plugin-sort-keys-fix)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [@tsconfig/next](https://www.npmjs.com/package/@tsconfig/next)
