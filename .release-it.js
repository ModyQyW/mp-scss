module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    tagName: 'v${version}',
  },
  npm: {
    publish: true,
  },
  github: {
    release: false,
  },
  gitlab: {
    release: false,
  },
  hooks: {
    "before:init": "yarn run lint"
  }
};
