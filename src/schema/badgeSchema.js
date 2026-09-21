// 1. TELL MARKDOC MY TAG EXISTS VIA A SCHEMA

export const badge = {
    render: 'MyBadgeComponent',
    attributes: {
        text: { type: String, default: 'Info' },
        type: { type: String }
    }
}