# ESLint Config

⚙️ My preferred configs for CommitLint, ESLint, MarkdownLint, Prettier, and TypeScript.

[![CircleCI](https://circleci.com/gh/joncursi/eslint-config.svg?style=shield)](https://circleci.com/gh/joncursi/eslint-config)

## Getting Started

Install this package, [husky](https://github.com/typicode/husky), and
[lint-staged](https://github.com/okonet/lint-staged) as a dev dependencies:

```shell
npm install --save-dev @joncursi/eslint-config husky lint-staged
```

Configure husky by adding the following to your `package.json` file:

```json
...
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
...
```

### Configure CommitLint

To configure [CommitLint](https://github.com/marionebl/commitlint), create a
`commitlint.config.js` file in the root of your project that contains the
following:

```js
/**
 * @prettier
 */

/* eslint-disable */

module.exports = require('@joncursi/eslint-config/commitlint.config');
```

This will allow CommitLint to discover the configuration this repository
provides from within your `node_modules` folder.

Next, add the following to your `package.json` file so that CommitLint will
check for infractions in your commit messages every time you create a new
commit:

```json
...
"husky": {
  "hooks": {
    ...
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    ...
  }
},
...
```

### Configure ESLint

To configure [ESLint](https://eslint.org/), add the following to your
`package.json` file. This will allow ESLint to discover the configuration this
repository provides from within your `node_modules` folder, and will check
your `*.js`, `*.ts`, and `*.tsx` files for infractions every time you create a new commit:

```json
...
"eslintConfig": {
  ...
  "extends": [
    ...
    "@joncursi/eslint-config",
    ...
  ],
  ...
},
...
"lint-staged": {
  ...
  "*.{js,ts,tsx}": "eslint",
  ...
},
...
```

If you're using [react-intl](https://github.com/formatjs/react-intl) in your
project, you can also lint for i18n infractions by also including
`@joncursi/eslint-config/intl` in ESLint's `extends: [...]` array.

### Configure MarkdownLint

To configure [MarkdownLint](https://github.com/DavidAnson/markdownlint), add the
following to your `package.json` file. This will allow MarkdownLint to discover
the configuration this repository provides from within your `node_modules`
folder, and will check your `*.md` files for infractions every time you create
a new commit:

```json
...
"lint-staged": {
  ...
  "*.{md}": "markdownlint --config node_modules/@joncursi/eslint-config/markdownlint.config.json",
  ...
},
...
```

### Configure Prettier

To configure [prettier](https://prettier.io/), create a `prettier.config.js`
file in the root of your project that contains the following:

```js
/**
 * @prettier
 */

/* eslint-disable */

module.exports = require('@joncursi/eslint-config/prettier.config');
```

This will allow Prettier to discover the configuration this repository
provides from within your `node_modules` folder.

Next, add the following to your `package.json` file so that prettier will check
your files for infractions every time you create a new commit:

```json
...
"lint-staged": {
  ...
  "*.{js,json,md,ts,tsx}": [
    "prettier --write",
    "git add"
  ]
  ...
},
...
```

## Configure TypesSript

To configure [TypeScript](https://www.typescriptlang.org/), add the following
to your `tsconfig.json` file. This will allow TypeScript to discover the
configuration this repository provides from within your `node_modules` folder:

```json
...
"extends": "node_modules/@joncursi/eslint-config/tsconfig.json",
...
```

## Testing

To check for infractions in this codebase, run:

```shell
npm test
```
