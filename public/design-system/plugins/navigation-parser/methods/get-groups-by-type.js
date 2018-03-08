const {uniq, sortBy} = require("lodash");

module.exports = function(type) {
    const groups = uniq(this._items.reduce((groups, component) => {
        if (component.type === type) {
            return [...groups, component.group];
        }

        return groups;
    }, []));

    return sortBy(groups, group => group);
};