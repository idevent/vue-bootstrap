<template>
	  <div id="wrapper">
        <nav class="navbar-default navbar-static-side">
            <div class="logo">iDEvent</div>
            <i-menu>
                <i-item icon="iconfont icon-all" link="/icon" title="IconFont" sub-title="图标"></i-item>
                <i-item link="/breadcrumb" title="Breadcrumb" sub-title="面包屑"></i-item>
                <i-item link="/panel" title="Panel" sub-title="面板"></i-item>
                <i-item link="/button" title="Button" sub-title="按钮"></i-item>
                <i-item link="/tabs" title="Tabs" sub-title="标签页"></i-item>
                <i-item link="/modal" title="Modal" sub-title="模态窗"></i-item>

                <i-item link="/foo" title="Layouts" :child=true>
                    <i-item icon="fa fa-th-large" link="/foo" title="Dashborads"></i-item>
                    <i-item icon="fa fa-th-large" link="/foo" title="Dashborads"></i-item>
                    <i-item icon="fa fa-th-large" title="Dashborads"></i-item>
                    <i-item icon="fa fa-th-large" link="/foo" title="Dashborads"></i-item>
                    <i-item icon="fa fa-th-large" link="/foo" title="Dashborads"></i-item>
                    <i-item icon="fa fa-th-large" link="/foo" title="Dashborads"></i-item>
                </i-item>
            </i-menu>
        </nav>
        <div id="page-wrapper">
            <nav class="navbar navbar-static-top white-bg"></nav>
            <router-view></router-view>
        </div>
  	</div>
</template>
<script>
import {iMenu, iItem} from '../components/menu'
export default {
    components: {
        iMenu, iItem
    }
}
</script>
