<template>
    <div class="modal fade animated" :class="animatedClass" :style="visibleStyle" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-backdrop fade in"></div>
        <div class="modal-dialog" :style="defaultStyle">
            <div class="modal-content">
                <slot name="header" v-if="header">
                    <div class="modal-header text-center">
                        <h4>{{title}}</h4>
                        <span @click="toggle(false)" class="pull-right iconfont icon-close"></span>
                    </div>
                </slot>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer" v-if="footer">
                    <slot name="footer" v-if="footer">
                        <i-button class="btn-primary pull-right">确认</i-button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import iButton from '../button'
import cx from 'classnames'
export default {
    components: {
        iButton
    },
    props: {
        width: {
            type: [Number, String],
            default: 600
        },
        footer: {
            type: Boolean,
            default: true
        },
        header: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: '标题'
        },
        value: {
            type: Boolean,
            default: false
        }

    },

    computed: {
        //默认样式
        defaultStyle () {
            return {
                width: this.width + 'px'
            }
        },
        visibleStyle () {
            return {
                display: this.value ? 'block' : 'none'
            }
        },
        animatedClass () {
            return ({
                ['in']: this.value,
                ['fadeIn']: this.value,
                ['fadeOutUp']: !this.value
            })
        }
    },

    methods: {
        //触发打开或关闭时间
        toggle (value) {
            console.log(value)
            this.$emit('input', value)
            console.log(this.value)
        }
    }
}
</script>
