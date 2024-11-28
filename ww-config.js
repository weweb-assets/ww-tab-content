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
            return sidepanelContent.missingTabOrField;
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
