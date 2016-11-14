<template>
    <div role="tabpanel" class="tab-pane animated fadeIn" :class="wrapCls">
        <slot>
            <div class="placeholder">
                <i :class="iconPlaceholder"></i>
                <br/>
                {{placeholder}}
            </div>
        </slot>
    </div>
</template>
<script>
    import cx from 'classnames'
    import Hub from './hub'//状态中继器
    export default {
        name: 'i-tab-pane',
        props: {
            dataKey: {
                type: String,
                required: true
            },
            title: String,
            disabled: {
                type: [Boolean, String],
                default: false
            },
            placeholder: {
                type: String,
                default: '暂无数据'
            },
            icon: {
                type: String,
                default: ''
            },
            iconPlaceholder: {
                type: String,
                default: 'fa fa-folder-open-o'
            }
        },

        data:() =>({
            selected: false
        }),

        created () {
            Hub.$on('active',(key)=>{
                this.selected = key === this.dataKey;
            })
        },

        computed: {
            wrapCls () {
                return cx({
                    ['active']: this.selected
                })
            }
        }
    }
</script>
