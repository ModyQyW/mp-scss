module.exports = {
  extends: [
    "stylelint-config-twbs-bootstrap/scss",
  ],
  rules: {
    "declaration-no-important": null,
    "selector-no-qualifying-type": [
      true,
      {
        ignore: [
          "attribute",
          "class",
        ],
      },
    ],
    "selector-type-no-unknown": null,
    "unit-no-unknown": null,
  },
  ignoreFiles: [
    "*.sh*",
    "*.js*",
    "*.md*",
    "LICENSE",
  ],
};
