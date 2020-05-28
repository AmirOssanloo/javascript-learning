module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '#components': './src/components',
          '#containers': './src/containers',
          '#context': './src/context',
          '#database': './src/database',
          '#hooks': './src/hooks',
          '#styles': './src/styles',
          '#views': './src/views'
        }
      }
    ]
  ]
};
