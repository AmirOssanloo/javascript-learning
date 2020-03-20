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
            '#components': './src/components',
            '#containers': './src/containers',
            '#config': './src/config',
            '#state': './src/state',
            '#utils': './src/utils'
          }
        }
      ]
    ]
  };
};