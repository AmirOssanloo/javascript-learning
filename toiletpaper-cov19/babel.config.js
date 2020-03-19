module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-runtime',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '#components': './src/js/components',
            '#config': './src/js/config',
            '#utils': './src/js/utils'
          }
        }
      ]
    ]
  };
};
