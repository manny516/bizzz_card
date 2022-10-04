module.exports = {
  // depreciating plugins object, migrating to recommended array instead
  // https://webpack.js.org/loaders/postcss-loader/#config
  plugins: [
    ["tailwindcss", {}],
    ["autoprefixer", {}],
  ],
};
