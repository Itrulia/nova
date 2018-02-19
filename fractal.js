const package = require("./package.json");

const fractal = module.exports = require("@frctl/fractal").create();


fractal.set("project.title", "Nova Design System");
fractal.set("project.version", package.version);

fractal.components.set("label", "Patterns");

fractal.components.set("path", __dirname + "/public/styles");
fractal.docs.set("path", __dirname + "/public/docs");