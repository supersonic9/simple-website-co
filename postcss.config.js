export default {
  plugins: {
    autoprefixer: {
      flexbox: 'no-2009',
      grid: 'autoplace',
    },
    'postcss-modules': {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      localsConvention: 'camelCase',
    },
  },
};
