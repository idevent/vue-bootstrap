<template>
    <button class="btn" :disabled="loading" :aria-disabled="loading">
        <i v-if="loading" class="fa fa-spinner fa-pulse fa-fw"></i>
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props: {
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
