module.exports = {
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '#components': './src/components',
          '#containers': './src/containers',
          '#config': './src/config',
          '#state': './src/state',
          '#utils': './src/utils'
        },
        extensions: ['.js']
      }
    }
  },
  env: {
    browser: true
  }
};
