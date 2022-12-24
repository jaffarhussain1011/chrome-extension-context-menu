// in ./build.js
const rewire = require("rewire");
const defaults = rewire("react-scripts/scripts/build.js");
const config = defaults.__get__("config");

/**
 * Do not mangle component names in production, for a better learning experience
 * @link https://kentcdodds.com/blog/profile-a-react-app-for-performance#disable-function-name-mangling
 */
// config.optimization.minimizer[0].options.terserOptions.keep_classnames = true;
// config.optimization.minimizer[0].options.terserOptions.keep_fnames = true;
config.entry = {
  main: [config.entry].filter(Boolean),
  background: "./src/BackgroundScripts/background.js",
};
config.output = {
  ...config.output,
  filename: "static/js/[name].js",
};
config.optimization = {
  ...config.optimization,
  runtimeChunk: false,
};
