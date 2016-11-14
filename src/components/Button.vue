<template>
    <div class="col-xs-12">
        <i-panel title="Colors Buttons">
            <p>
                Use any of the available button classes to quickly create a styled button.
            </p>
            <h4 class="font-bold">Normal buttons</h4>
            <br/>
            <i-button class="btn-default">Default</i-button>
            <i-button class="btn-primary" :loading=true>Primary</i-button>
            <i-button class="btn-success">Success</i-button>
            <i-button class="btn-danger">Danger</i-button>
            <i-button class="btn-info">Info</i-button>
            <i-button class="btn-warning">Warning</i-button>
            <i-button class="btn-link">Link</i-button>
        </i-panel>

        <i-panel title="Different sizes">
            <h4 class="font-bold">Button sizes</h4>
            <br/>
            <i-button class="btn-primary btn-lg">Default</i-button>
            <i-button class="btn-default">Default</i-button>
            <br/>
            <i-button class="btn-primary btn-sm">Default</i-button>
            <i-button class="btn-default btn-sm">Default</i-button>
            <br/>
            <i-button class="btn-primary btn-xs">Default</i-button>
            <i-button class="btn-default btn-xs">Default</i-button>

        </i-panel>

        <i-panel title="Outline And Block Buttons">
            <i-button class="btn-default">Default</i-button>
            <i-button class="btn-primary btn-outline">Primary</i-button>
            <i-button class="btn-success btn-outline">Success</i-button>
            <i-button class="btn-danger btn-outline">Danger</i-button>
            <i-button class="btn-info btn-outline">Info</i-button>
            <i-button class="btn-warning btn-outline">Warning</i-button>
            <i-button class="btn-link">Link</i-button>

            <br />
            <h4 class="font-bold">Icon Buttons</h4>
            <i-button class="btn-default btn-white fa fa-exchange"></i-button>
            <i-button class="btn-default btn-white fa fa-check-circle-o"></i-button>
            <br/>
            <i-button class="btn-primary btn-outline"><i class="fa fa-user-o"></i> Primary</i-button>
            <br/>
            <h4 class="font-bold">Circle Buttons</h4>
            <i-button class="btn-default btn-circle btn-xs"><i class="fa fa-check"></i></i-button>
            <i-button class="btn-default btn-circle btn-sm"><i class="fa fa-check"></i></i-button>
            <i-button class="btn-default btn-circle"><i class="fa fa-check"></i></i-button>
            <i-button class="btn-default btn-circle btn-lg"><i class="fa fa-check"></i></i-button>
            <br/>
            <i-button class="btn-danger btn-circle btn-xs"><i class="fa fa-heart"></i></i-button>
            <i-button class="btn-danger btn-circle btn-sm"><i class="fa fa-heart"></i></i-button>
            <i-button class="btn-danger btn-circle"><i class="fa fa-heart"></i></i-button>
            <i-button class="btn-danger btn-circle btn-lg"><i class="fa fa-heart"></i></i-button>
        </i-panel>
    </div>
</template>
<script>
    import iPanel from '../../components/panel'
    import iButton from '../../components/button'
    export default {
        components: {
            iPanel, iButton
        }
    }
</script>
