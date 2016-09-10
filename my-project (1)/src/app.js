import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router'
import app from './main'


// new Vue({
//   el: 'body',
//   components: { app }
// })

Vue.use(VueRouter);

//配置路由
const router = new VueRouter({
	history : true,//启用html5的history pushState replaceState
	saveScrollPosition : true //当用户点击后退时用popstate事件相应
});


routerConfig(router);

router.start(app,'#app');
window.router = router