<template>
    <div class="col-xs-12">
        <i-panel title="模态窗">
            <i-button v-on:click.native="open" class="btn-primary">打开弹出框</i-button>
            <i-modal v-model="modal">{{modal}}</i-modal>
        </i-panel>
    </div>
</template>
<script>
    import iPanel from '../../components/panel'
    import iModal from '../../components/modal'
    import iButton from '../../components/button'
    export default {
        data () {
            return {
                modal: false
            }
        },
        components: {
            iPanel, iModal, iButton
        },

        methods: {
            open() {
                console.log(this.modal)
                this.modal = true
            }
        }
    }
</script>
