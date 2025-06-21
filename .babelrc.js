module.exports = (api) => ({
  presets: [
    ['env-modules', { modules: api.env() === 'cjs' ? 'commonjs' : false }],
    ['@babel/react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-add-import-extension',
    api.env() === 'test' && 'istanbul',
  ].filter(Boolean),
});
