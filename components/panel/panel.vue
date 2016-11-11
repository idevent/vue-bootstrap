<template>
    <div class="panel clearfix">
        <div class="panel-heading">
            <h5 class="pull-left">标题
                <small>副标题</small>
            </h5>
        </div>
        <div class="panel-body">
            <slot>
                <div class="panel-placeholder">
                    <i class="fa fa-clock-o"></i>
                    <br/>
                    还有商品信息，请添加
                </div>
            </slot>
        </div>
    </div>
</template>
