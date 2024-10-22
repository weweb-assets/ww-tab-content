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
            defaultValue: {
                isWwObject: true,
                type: '6f8796b1-8273-498d-95fc-7013b7c63214', // Button
            }
        },
    },
};
