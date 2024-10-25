import { watch, inject } from 'vue';

export default function useTabContentHint(emit) {

    const missingTabOrField = inject('_wwTabsMissingTabOrFieldObj');

    watch(
        missingTabOrField,
        value => {
            emit('update:sidepanel-content', { path: 'missingTabOrField', value });
        },
        { immediate: true }
    );

    return {};
}