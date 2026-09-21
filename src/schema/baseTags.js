export const baseTags = {
    heading: {
        render: 'Heading',
        attributes: {
            title: { type: String },
            subtext: { type: String },
        }
    },

    card: {
        render: 'Card',
        attributes: {
            title: { type: String },
            icon: { type: String },
            variant: {
                type: String,
                default: 'default',
            },
        },
    },

    stat: {
        render: 'Stat',
        selfClosing: true,
        attributes: {
            value: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
        },
    },

    image: {
        render: 'Image',
        attributes: {
            url: {
                type: String,
                required: true,
            },
            subtext: {
                type: String,
            },
            alt: {
                type: String,
            },
        }
    },

    columns: {
        render: 'Columns',
        attributes: {
            count: {
                type: Number,
                default: 2,
            },
        },
    },
};