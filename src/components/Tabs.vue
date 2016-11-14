<template>
    <div class="col-xs-12">
        <i-panel title="Tabs">
            <i-tab default-key="1">
                <i-tab-pane data-key="1" title="选项1">选项1</i-tab-pane>
                <i-tab-pane data-key="2" title="选项2">选项2</i-tab-pane>
                <i-tab-pane data-key="3" title="选项3"></i-tab-pane>
            </i-tab>
        </i-panel>

        <i-panel title="Tabs">
            <i-tab default-key="1">
                <i-tab-pane data-key="1" icon="fa fa-plus" title="选项1">选项1</i-tab-pane>
                <i-tab-pane data-key="2" title="选项2" :disabled="true">选项2</i-tab-pane>
                <i-tab-pane data-key="3" title="选项3"></i-tab-pane>
            </i-tab>
        </i-panel>
    </div>
</template>
<script>
    import iPanel from '../../components/panel'
    import {iTab, iTabPane} from '../../components/tab'
    export default {
        components: {
            iPanel, iTab, iTabPane
        }
    }
</script>
