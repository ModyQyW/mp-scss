/* eslint-disable import/no-extraneous-dependencies */
const config = require('@modyqyw/fabric/prettier');

module.exports = {
  ...config,
  overrides: [
    {
      files: ['*.css', '*.less', '*.scss'],
      options: {
        printWidth: 150,
        singleQuote: false,
        trailingComma: 'none',
      },
    },
  ],
};
