import $ from 'zepto';

export default function(router){

	router.map({
		'*':{
			compontent (resolve) {
				require(['./views/welcome'],resolve)
			}
		}
	});
}