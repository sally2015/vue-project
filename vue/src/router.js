import $ from 'zepto';

export default function(router){

	router.map({
		'*':{
			component (resolve) {
				 require(['./views/welcome.vue'],resolve) 
			}
		},
		'/':{
			component (resolve) {
				 require(['./views/welcome'],resolve) 
			}
		}
	});

	 router.beforeEach(({to, from, next}) => {
	    let toPath = to.path
	    let fromPath = from.path
	    console.log(`to: ${toPath} from: ${fromPath}`)
	    if (toPath.replace(/[^/]/g, '').length > 1) {
	      router.app.isIndex = false
	    }
	    else {
	      let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
	      router.app.isIndex = depath ? 0 : 1
	    }
	    next()
	  })

	  router.afterEach(function ({to}) {
	    console.log(`成功浏览到: ${to.path}`)
	    $.refreshScroller()
	  })
}