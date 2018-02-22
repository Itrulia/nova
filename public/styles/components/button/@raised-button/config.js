module.exports = {
    variants: [
        {
            id: "primary",
            props: {
                classNames: ["c-button--primary"],
                disabled: false
            },
            scenarios: [{
                label: "English",
                context: {
                    buttonLabel: "submit"
                }
            }]
        },
        {
            id: "big",
            props: {
                classNames: ["c-button--big"],
                disabled: false
            },
            scenarios: [{
                label: "English",
                context: {
                    buttonLabel: "submit"
                }
            }]
        },
        {
            id: "huge",
            props: {
                classNames: ["c-button--huge"],
                disabled: false
            },
            scenarios: [{
                label: "English",
                context: {
                    buttonLabel: "submit"
                }
            }]
        },
        {
            id: "gigantic",
            props: {
                classNames: ["c-button--gigantic"],
                disabled: false
            },
            scenarios: [{
                label: "English",
                context: {
                    buttonLabel: "submit"
                }
            }]
        },
        {
            id: "petite",
            props: {
                classNames: ["c-button--petite"],
                disabled: false
            },
            scenarios: [{
                label: "English",
                context: {
                    buttonLabel: "submit"
                }
            }]
        },
        {
            id: "skinny",
            props: {
                classNames: ["c-button--skinny"],
                disabled: false
            },
            scenarios: [{
                label: "English",
                context: {
                    buttonLabel: "submit"
                }
            }]
        },
        {
            id: "block",
            props: {
                classNames: ["c-button--block"],
                disabled: false
            },
            scenarios: [{
                label: "English",
                context: {
                    buttonLabel: "submit"
                }
            }]
        },
        {
            id: "disabled",
            props: {
                disabled: true
            },
            scenarios: [{
                label: "English",
                context: {
                    buttonLabel: "submit"
                }
            }]
        },
    ]
};