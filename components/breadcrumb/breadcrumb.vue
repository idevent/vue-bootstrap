<template>
    <div class="i-breadcrumb white-bg">
        <h2>{{title}}</h2>

        <slot></slot>
        <div class="clearfix"></div>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>
