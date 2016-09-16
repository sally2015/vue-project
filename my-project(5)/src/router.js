import $ from 'zepto';
import Vue from 'vue'

export default function (router){
	//路由映射
	router.map({
		'*': {
	        component (resolve) {
	        	require(['./views/home.vue'],resolve);
	        }
	    },
	    '/home': {
	        component (resolve) {
	        	require(['./views/home.vue'],resolve);
	        }
	    },
	    '/search': {
	        component (resolve) {
	        	require(['./views/search.vue'],resolve);
	        }
	    },
	    '/me': {
	        component (resolve) {
	        	require(['./views/me.vue'],resolve);
	        }
	    },
	    '/message': {
	        component (resolve) {
	        	require(['./views/message.vue'],resolve);
	        }
	    },
	    '/me/moment': {
	        component (resolve) {
	        	require(['./views/me/moment.vue'],resolve);
	        }
	    },
	    '/me/articles': {
	        component (resolve) {
	        	require(['./views/me/articles.vue'],resolve);
	        }
	    },
	    '/me/friends': {
	        component (resolve) {
	        	require(['./views/me/friends.vue'],resolve);
	        }
	    },
	    '/me/practice': {
	        component (resolve) {
	        	require(['./views/me/praticle.vue'],resolve);
	        }
	    },
	    '/me/read': {
	        component (resolve) {
	        	require(['./views/me/read.vue'],resolve);
	        }
	    },
	    '/me/love': {
	        component (resolve) {
	        	require(['./views/me/love.vue'],resolve);
	        }
	    }


	})
}