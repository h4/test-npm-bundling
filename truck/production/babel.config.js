module.exports = function(api) {
  api.cache.never();

  const presets = [
    "env",
    "react",
  ];
  const plugins = [
  ];

  return {
    presets,
    plugins
  };
};
