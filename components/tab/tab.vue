<template>
    <div>
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" v-for="(tab, index) in tabs" :class="{'active': active==tab.dataKey,'disabled': !!tab.disabled}" @click="next(tab)">
                <a href="javascript:;"><i v-if="tab.icon" :class="tab.icon"></i> {{tab.title}}</a>
            </li>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import Hub from './hub'
    import cx from 'classnames'
    export default {
        name: 'i-tab',
        props: {
            defaultKey: {
                type: String, //Default Tab Key
                required: true
            },
        },

        data () {
            return {
                active: 0,
                tabs: []
            }
        },

        mounted () {
            let tabs = []
            for (let [index, child] of Object.entries(this.$children)) {
                if (child.disabled == 'false') {
                    child.disabled = false
                }
                tabs.push({
                    dataKey: child.dataKey,
                    title: child.title,
                    icon: child.icon,
                    disabled: child.disabled
                })

                //broadcast active
                if(this.defaultKey == child.dataKey) {
                    this.active = child.dataKey
                    Hub.$emit('active', this.active)
                }
            }
            this.tabs = tabs
        },

        methods: {
            next(tab) {
                if (!!tab.disabled === true) {
                    return false
                }
                this.active = tab.dataKey
                Hub.$emit('active', this.active)
            }
        }
    }
</script>
