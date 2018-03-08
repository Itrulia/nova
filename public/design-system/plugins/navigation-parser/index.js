const {uniq} = require("lodash");
const getTypes = require("./methods/get-types");
const getGroupsByType = require("./methods/get-groups-by-type");
const getComponentsByTypeAndGroup = require("./methods/get-components-by-type-and-group");
const {ComponentCollection} = require("@frctl/support");

module.exports = function navigationParserPlugin() {
    return {
        name: "navigation-parser",
        transform: "components",
        handler(components, state, app) {
            ComponentCollection.prototype.getTypes = getTypes;
            ComponentCollection.prototype.getGroupsByType = getGroupsByType;
            ComponentCollection.prototype.getComponentsByTypeAndGroup = getComponentsByTypeAndGroup;

            return components.map(component => {
                const parts = component.src.relative.split("/");

                let type = null;
                let group = null;

                if (parts.length === 3) {
                    type = parts[0];
                    group = parts[1];
                } else if (parts.length === 2) {
                    type = parts[0];
                }

                component.type = type;
                component.group = group;

                return component;
            });
        }
    }
}