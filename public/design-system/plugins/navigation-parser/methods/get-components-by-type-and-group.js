const {uniq, sortBy} = require("lodash");

module.exports = function(type, group) {
    const components = this._items.filter(component => {
        return component.group === group && component.type === type;
    });

    return sortBy(components, component => component.label);
};