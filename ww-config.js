export default {
    editor: {
        label: {
            en: 'Tab content',
        },
        icon: 'content',
        bubble: {
            icon: 'content',
        },
        customSettingsPropertiesOrder: [],
        hint: (_, sidepanelContent) => {
            if(sidepanelContent.missingTabOrField) {
                return {
                    type: 'warning',
                    header: sidepanelContent.missingTabOrField.header,
                    text: sidepanelContent.missingTabOrField.text,
                };
            }
        },
    },
    inherit: {
      type: "ww-layout",
    },
    options: {
      autoByContent: true,
      displayAllowedValues: ["flex", "grid"],
    },
    states: ['active'],
    properties: {
        name: {
            label: {
                en: 'Name',
            },
            type: 'Text',
            defaultValue: '',
            propertyHelp: {
                tooltip: "The name of the trigger that activates this content.",
            },
            bindable: true,
        },
        tabContentElement: {
            hidden: true,
            defaultValue: [],
        },
        /* wwEditor:start */
        missingTabOrField: {
            hidden: true,
            defaultValue: false,
            editorOnly: true,
        },
        /* wwEditor:end */
    },
};
