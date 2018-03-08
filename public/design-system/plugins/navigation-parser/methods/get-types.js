const {uniq, sortBy} = require("lodash");

module.exports = function() {
    const types = uniq(this._items.map(component => component.type));

    return sortBy(types, type => type);
}