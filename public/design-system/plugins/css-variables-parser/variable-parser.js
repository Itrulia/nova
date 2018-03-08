"use strict";
exports.__esModule = true;
var syntax = require("postcss-scss");
var ramda_1 = require("ramda");
exports.isDocBlock = function (node) { return Boolean(node &&
    node.text &&
    node.text.match(/(?:[ \t]*\*[ \t]*)(?:@([a-zA-Z]+)[ \t]*)?(?:([^{\n-]+)[ \t]+)?(?:{([a-z|A-Z]+)}[ \t]*)?(.*)/)); };
exports.stripDocBlock = function (docBlock) { return docBlock
    .replace(/^(\s+|\*)([ ]|\n|(\*[ ]?))/gm, '') // Leading chars
    .replace(/[ ]+$/gm, ''); };
exports.isScssVariable = function (node) { return Boolean(node &&
    node.prop &&
    node.prop.match(/^\$/i)); };
exports.isLessVariable = function (node) { return Boolean(node &&
    node.prop &&
    node.prop.match(/^\@/i)); };
exports.isVariable = ramda_1.anyPass([
    exports.isScssVariable,
    exports.isLessVariable
]);
var VariableParser = /** @class */ (function () {
    function VariableParser(parser) {
        this.parser = parser;
    }
    VariableParser.prototype.getVariables = function (fileName, fileContent) {
        var content = fileContent
            .toString()
            .replace(/(?:\r\n|\r|\n)/g, '\n');
        return this.processNodes(this.parser.process(content, {
            syntax: syntax
        }).root.nodes, fileName);
    };
    VariableParser.prototype.processNodes = function (nodes, file) {
        var variables = [];
        nodes.forEach(function (node, index) {
            var nextNode = nodes[index + 1];
            if (exports.isDocBlock(node) &&
                exports.isVariable(nextNode)) {
                var comment = node;
                var declaration = nextNode;
                variables.push({
                    comment: exports.stripDocBlock(comment.text),
                    name: declaration.prop,
                    value: declaration.value,
                    isDefault: false
                });
            }
        });
        return ramda_1.uniqBy(function (variable) { return variable.name; }, variables);
    };
    return VariableParser;
}());
exports.VariableParser = VariableParser;
