const markdownConfig = {
    gfm: true
};

const statusConfig = {
    blacklist: []
};

module.exports = {
    app: {
        src: "./public/styles",
        engines: [
            "@frctl/fractal-engine-nunjucks"
        ],
        plugins: [
            require("@itrulia/fractal-component-status")(statusConfig),
            require("@itrulia/fractal-variant-status")(statusConfig),
            require("./public/design-system/plugins/readme-parser/")(markdownConfig),
            require("@itrulia/fractal-variant-readme")(markdownConfig),

            // WIP
            "./public/design-system/plugins/css-variables-parser/index.js",
            "./public/design-system/plugins/navigation-parser/index.js",
        ],
    },

    pages: {
        src: "./public/design-system/styleguide",
        dest: "./dist/design-system",
        site: {
            title: "Nova Design System",
        },
        routes: {
            components: {
                collection: "library.components",
                template: "_component.njk",
                permalink: "components/{component.id}"
            }
        },
    },

    inspector: {}
};