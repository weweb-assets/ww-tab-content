export default {
    editor: {
        label: {
            en: 'Tab content',
        },
        icon: 'slider',         // 📛 TODO
        bubble: {
            icon: 'slider',     // 📛 TODO
        },
        customSettingsPropertiesOrder: [],
    },
    properties: {
        name: {
            label: {
                en: 'Name',
            },
            type: 'Text',
            defaultValue: '',
        },
        tabContentElement: {
            hidden: true,
            defaultValue: [],
        },
    },
};
