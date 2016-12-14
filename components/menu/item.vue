<template>
    <li>
        <router-link :to="link">
            <i :class="icon"></i><span class="nav-label">{{title}} <small>{{subTitle}}</small></span>
            <span v-if="child" :class="angleCls" @click="toggle"></span>
        </router-link>
        <ul v-if="child" class="nav collapse" :class="openCls">
            <slot></slot>
        </ul>
    </li>
</template>
<script>
    import cx from 'classnames'
    export default{
        props: {
            title: {
                type: String,
                default: ''
            },
            subTitle: {
                type: String,
                default: ''
            },
            link: {
                type: String,
                default: ''
            },

            icon: {
                type: String,
                default: ''
            },

            child: {
                type: Boolean,
                default: false
            },
        },

        computed: {
            angleCls () {
                return cx({
                    ['iconfont']: true,
                    ['icon-less']: true,
                    ['pull-right']: true,
                    ['iconfont-rotate-180']: this.open
                })
            },

            openCls () {
                return cx({
                    ['in']: this.open
                })
            }
        },

        data () {
            return {
                open: false
            }
        },

        methods: {
            //触发子级菜单打开或关闭
            toggle () {
                console.log('event')
                this.open = !this.open

                //阻止事件冒泡
                event.stopPropagation()
                event.preventDefault()
                return false
            }
        }
    }

</script>
