module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-runtime',
      [
        'module-resolver',
        {
          // root: ['./src'],
          alias: {
            '#root': './',
            '#src': './src',
            '#static': './static',
            '#blocks': './src/blocks',
            '#components': './src/components',
            '#containers': './src/containers',
            '#config': './src/config',
            '#database': './src/database',
            '#hooks': './src/hooks',
            '#state': './src/state',
            '#styles': './src/styles',
            '#utils': './src/utils'
          }
        }
      ]
    ]
  };
};
