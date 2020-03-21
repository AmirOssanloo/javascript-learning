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
            '#static': './static',
            '#blocks': './src/blocks',
            '#components': './src/components',
            '#containers': './src/containers',
            '#config': './src/config',
            '#state': './src/state',
            '#styles': './src/styles',
            '#utils': './src/utils'
          }
        }
      ]
    ]
  };
};
