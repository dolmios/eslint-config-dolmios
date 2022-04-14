# eslint-config-dolmios

My personal ESLint configuration preferences.

### Installation

Ensure that you have `eslint` and `next` installed. Our configuration utilises the [Next.js Core Web Vitals](https://nextjs.org/docs/basic-features/eslint#core-web-vitals)
configuration as a baseline, alongside handling `parser`, `plugins` and `settings`.

```
yarn add eslint-config-dolmios
```

### Usage

Populate `.eslintrc` with the following, and code away.

```json
{
  "extends": ["dolmios"]
}
```

### Usage with Prettier

Prettier is configured to work nicely with this config, though is an optional inclusion. If you'd like to include the config, you can add it to `package.json`.

```json
"prettier": "eslint-config-dolmios/.prettierrc.json"
```
