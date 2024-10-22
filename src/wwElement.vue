<template>
    <wwLayout v-show="showContent" path="tabContentElement" />
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
    watch: {},
    mounted() {},
    methods: {},
    inject: ['activeTabProvided'],
};
</script>

<style lang="scss" scoped>
</style>
