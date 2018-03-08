import * as postcss from "postcss";
import * as fs from "fs";
const syntax = require("postcss-scss");
import {anyPass, uniqBy} from "ramda";

export const isDocBlock = (node: postcss.Comment) => Boolean(
    node &&
    node.text &&
    node.text.match(/(?:[ \t]*\*[ \t]*)(?:@([a-zA-Z]+)[ \t]*)?(?:([^{\n-]+)[ \t]+)?(?:{([a-z|A-Z]+)}[ \t]*)?(.*)/)
);

export const stripDocBlock = (docBlock: string) => docBlock
    .replace(/^(\s+|\*)([ ]|\n|(\*[ ]?))/gm, "") // Leading chars
    .replace(/[ ]+$/gm, "");

export const isScssVariable = (node: postcss.Declaration) => Boolean(
    node &&
    node.prop &&
    node.prop.match(/^\$/i)
);

export const isLessVariable = (node: postcss.Declaration) => Boolean(
    node &&
    node.prop &&
    node.prop.match(/^\@/i)
);

export const isVariable: (node: postcss.Declaration) => Boolean = anyPass([
    isScssVariable,
    isLessVariable
]);

export interface Variable {
    comment: string;
    name: string;
    value: string;
    isDefault: boolean;
}

export class VariableParser {
    constructor(private parser: postcss.Processor) {}

    public getVariables(fileName: string, fileContent: string): Object[] {
        const content = fileContent
            .toString()
            // Normalize file content to Unix EOLs
            .replace(/(?:\r\n|\r|\n)/g, "\n");

        return this.processNodes(this.parser.process(content, {
            syntax: syntax
        }).root.nodes, fileName);
    }

    private processNodes(nodes: postcss.ChildNode[], file: string): Object[] {
        const variables = [] as Variable[];

        nodes.forEach((node, index) => {
            const nextNode = nodes[index + 1];

            if (
                isDocBlock(node as postcss.Comment) &&
                isVariable(nextNode as postcss.Declaration)
            ) {
                const comment = node as postcss.Comment;
                const declaration = nextNode as postcss.Declaration;

                variables.push({
                    comment: stripDocBlock(comment.text),
                    name: declaration.prop,
                    value: declaration.value,
                    isDefault: false
                });
            }
        });

        return uniqBy(variable => variable.name, variables);
    }
}