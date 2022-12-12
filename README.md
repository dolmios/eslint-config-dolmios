# eslint-config-dolmios

> A simple ESLint setup using [@typescript-eslint](https://typescript-eslint.io).

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

#### Usage with Prettier

Prettier is configured to work nicely with this config, though is an optional inclusion. If you'd like to include the config, you can add it to `package.json`.

```json
"prettier": "eslint-config-dolmios/.prettierrc.json"
```

## Contributing

Feel free to get in touch with feedback, advice or suggestions. See [Conventional Commits](https://gist.github.com/dolmios/0e33c579a500d87fc6f44df6cde97259) for new contributors.

## Acknowledgments

- [eslint-plugin-sort-keys-fix](https://github.com/leo-buneev/eslint-plugin-sort-keys-fix)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)

## License

It's an ESLINT config, go crazy.
