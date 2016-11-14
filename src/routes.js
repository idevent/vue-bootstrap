export default [{
    path: '/',
    component: require('components/Hello.vue')
}, {
    path: '/breadcrumb',
    component: resolve => require(['components/Breadcrumb.vue'], resolve)
}, {
    path: '/panel',
    component: resolve => require(['components/Panel.vue'], resolve)
}, {
    path: '/button',
    component: resolve => require(['components/Button.vue'], resolve)
}, {
    path: '/tabs',
    component: resolve => require(['components/Tabs.vue'], resolve)
}, {
    path: '/modal',
    component: resolve => require(['components/Modal.vue'], resolve)
}]
