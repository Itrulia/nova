module.exports = {
    app: {
        src: "./public/styles/components",
        engines: [
            "@frctl/fractal-engine-nunjucks"
        ],
        plugins: [
            ["./public/design-system/plugins/readme-parser/index.js", {
                gfm: true
            }],
            ["@itrulia/fractal-variant-readme", {
                gfm: true
            }]
        ]
    },

    pages: {
        src: "./public/design-system/styleguide",
        dest: "./public/design-system/build",
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