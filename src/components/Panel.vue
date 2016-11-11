<template>
    <div class="col-xs-12">
        <i-panel>{{message}}</i-panel>
    </div>
</template>
<script>
    import iPanel from '../../components/panel'
    export default {
        data () {
            return {
                message: ''
            }
        },
        components: {
            iPanel
        }
    }
</script>
