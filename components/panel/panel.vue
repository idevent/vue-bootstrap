<template>
    <div class="panel clearfix">
        <div v-if="title" class="panel-heading">
            <h5 class="pull-left">{{title}}
                <small>{{subTitle}}</small>
            </h5>
        </div>
        <div class="panel-body">
            <slot>
                <div class="panel-placeholder">
                    <i :class="icon"></i>
                    <br/>
                    {{placeholder}}
                </div>
            </slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            subTitle: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: '暂无数据'
            },
            icon: {
                type: String,
                default: 'fa fa-folder-open-o'
            }

        }
    }
</script>
