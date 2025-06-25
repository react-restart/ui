export default (api) => ({
  presets: [
    ['env-modules', { modules: api.env() === 'cjs' ? 'commonjs' : false }],
    ['@babel/react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [api.env() === 'test' && 'istanbul'].filter(Boolean),
});
