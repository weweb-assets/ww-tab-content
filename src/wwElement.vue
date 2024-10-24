<template>
    <wwLayout 
        v-if="loadAllTabs ? true : showContent"
        v-show="showContent" 
        path="tabContentElement" 
    />
</template>

<script>

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
    setup(props) {},
    data() {
        return {};
    },
    computed: {
        showContent() {
            return this.activeTabProvided == this.content.name;
        },
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
    },
    mounted() {},
    methods: {},
    inject: ['activeTabProvided', 'loadAllTabs'],
};
</script>

<style lang="scss" scoped>
</style>
