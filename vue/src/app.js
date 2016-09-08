import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routerConfig from './router';
import app from './main.vue'
//use Router
Vue.use(VueRouter);

const router = new VueRouter({
	hashbang : true,
	history : true,
	saveScrollPosition : true,
	suppressTransitionError : true

});
// Resource
Vue.use(VueResource)

routerConfig(router);

router.start(app, '#app')

window.router = router