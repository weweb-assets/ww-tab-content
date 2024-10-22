<template>
    <div v-show="showContent">
        <p>Content tab : {{ activeTabProvided }}</p>
        <wwElement class="ww-tab-content" v-bind="content.tabContentElement" />
    </div>
</template>

<script>
// import { computed, ref } from 'vue';

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
.ww-tab-content-container {
    background-color: green;
    padding: 10px;

    .ww-tab-content {
        background-color: yellow;
    }
}
</style>
