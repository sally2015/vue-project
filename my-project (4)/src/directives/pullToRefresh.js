import $ from 'zepto'

export default {
	params:['distance','title','arr'],
	bind () {  //只调用一次，在指令第一次绑定到元素上时调用

		let el = $(this.el);  //指令绑定的元素
		//这一句是实现ui
		el.addClass('content pull-to-refresh-content')
		.attr('data-ptr-distance',this.params.distance)
		.attr('data-title',this.params['title'])
		.attr('data-arr',this.params['arr']);

		$(el).on('refresh', ()=> {   //这里的refresh是sui的事件
			//在vue中的表达式是这样的 v-pull-to-refresh="refreshAll"，就是调用refreshAll()
			this.vm[this.expression](el); 
		})
	},
	ubind () {
		$.destroyPullToRefresh($(this.el));  //销毁也是sui的事件
	}
}