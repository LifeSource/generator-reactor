var path = require("path");

module.exports = function() {

  var port = process.env.PORT || 3000,
    env = process.env.NODE_ENV || "dev";

  var root = "./";

  var config = {

    root: root,
    appNamePrompt: {
      type: "input",
      name: "appName",
      message: "Please enter your app name: ",
      default: path.basename(process.cwd())
    }
  };

  return config;
};
