var generators = require("yeoman-generator"),
  _ = require("lodash");

module.exports = generators.NamedBase.extend({

  constructor: function() {
    generators.NamedBase.apply(this, arguments);
  },

  writing: {
    component: function() {
      this.fs.copyTpl(
        this.templatePath("component.js"),
        this.destinationPath("src/" + this.name + "/" + this.name + ".js"), {
          componentName: this._capitalizeFirstLetter(this.name)
        }
      );
    },

  },

  _capitalizeFirstLetter: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
