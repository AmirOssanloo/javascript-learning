module.exports = {
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '#components': './src/js/components',
          '#config': './src/js/config',
          '#utils': './src/js/utils'
        },
        extensions: ['.js']
      }
    }
  },
  env: {
    browser: true
  }
};
