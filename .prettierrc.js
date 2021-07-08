const config = require('@modyqyw/fabric/prettier');

module.exports = {
  ...config,
  // write your own rules here
  overrides: [
    {
      files: ['*.css', '*.less', '*.scss'],
      options: {
        printWidth: 160,
        singleQuote: false,
        trailingComma: 'none',
      },
    },
  ],
};
