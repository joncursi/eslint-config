module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  insertPragma: true,
  jsxBracketSameLine: false,
  overrides: [
    {
      files: "*.js",
      options: {
        parser: "flow"
      }
    }
  ],
  printWidth: 80,
  proseWrap: "preserve",
  requirePragma: true,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false
};
