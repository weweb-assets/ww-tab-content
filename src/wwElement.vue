<template>
    <template v-if="loadAllTabs">
        <wwLayout v-show="showContent" path="tabContentElement" />
    </template>
    <template v-else>
        <div>
            <wwLayout v-if="loadAllTabs ? true : showContent" path="tabContentElement" />
        </div>
    </template>
</template>

<script>
/* wwEditor:start */
import useTabContentHint from './editor/useTabContentHint';
/* wwEditor:end */

export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwFrontState: { type: Object, required: true },
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
        wwElementState: { type: Object, required: true },
    },
    emits: [],
    setup(props, { emit }) {
        /* wwEditor:start */
        useTabContentHint(emit);
        /* wwEditor:end */
    },
    data() {
        return {
            /* wwEditor:start */
            isMounted: false,
            /* wwEditor:end */
        };
    },
    computed: {
        showContent() {
            return this.activeTabProvided == this.content.name;
        },
        /* wwEditor:start */
        currentName() {
            return this.content.name;
        },
        /* wwEditor:end */
    },
    watch: {
        showContent: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.$emit('add-state', 'active');
                } else {
                    this.$emit('remove-state', 'active');
                }
            },
        },
        /* wwEditor:start */
        currentName: {
            immediate: true,
            handler(newValue, oldValue) {
                this.isMounted ? this.hintChangeContentName(oldValue, newValue) : null;
            },
        },
        /* wwEditor:end */
    },
    mounted() {
        /* wwEditor:start */
        this.hintRegisterTabContent(this.content.name);
        this.isMounted = true;
        /* wwEditor:end */
    },
    unmounted() {
        /* wwEditor:start */
        this.hintUnregisterTabContent(this.content.name);
        /* wwEditor:end */
    },
    methods: {},
    inject: [
        'activeTabProvided',
        'loadAllTabs',
        /* wwEditor:start */
        'hintRegisterTabContent',
        'hintUnregisterTabContent',
        'hintChangeContentName',
        /* wwEditor:end */
    ],
};
</script>

<style lang="scss" scoped></style>
