const marked = require("marked");

module.exports = function readmeParserPlugin(opts = {}) {
    marked.setOptions(opts);

    return {
        name: "readme-parser",
        transform: "components",
        handler(components, state, app) {
            return components.map(component => {
                const readme = component.getFiles().find(file => file.basename.toLowerCase() === "readme.md");

                if (readme) {
                    component.readme = marked(readme.contents.toString());
                }

                return component;
            });
        }
    }
}