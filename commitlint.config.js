/**
 * @prettier
 */

/* eslint-disable immutable/no-mutation */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
