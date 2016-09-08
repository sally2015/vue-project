import $ from 'zepto';
import Vue from 'vue'
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})
export default function (router){
	//路由映射
	router.map({
	    '/foo': {
	        component: Foo
	    },
	    '/bar': {
	        component: Bar
	    }
	})
}