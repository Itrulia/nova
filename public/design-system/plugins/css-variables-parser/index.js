const {VariableParser} = require("./variable-parser");
const postcss = require("postcss");
const parser = new VariableParser(postcss());

const supportedExtensions = [
    ".scss"
];

module.exports = function cssVariablesParserPlugin() {
    return {
        name: "css-variables-parser",
        transform: "components",
        handler(components, state, app) {
            return components.map(component => {
                component.getFiles().forEach(file => {
                    if (!supportedExtensions.includes(file.extname)) {
                        return;
                    }

                    component.variables = parser.getVariables(
                        file.path,
                        file.contents
                    );

                    console.log(component.variables);
                });

                return component;
            });
        }
    }
}