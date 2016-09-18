<template>
	<div>
        <div class="me-container">
        	<h3>详情页</h3>
        	<p>{{Lcontent}}</p>
        </div>
   	</div>
</template>
<script>
	export default {
		route: {
		  data: function (transition) {

		   this.$set('Lcontent',decodeURIComponent(this.$route.params.Lcontent)); 
		  }
		},
		ready (){
		     $.init();
		     
		  },
		data (){
			return {
				Lcontent : ''
			}
		},
		components:{
			
		}
	}
</script>
<style scoped>
	h3{
		text-align: center;
	}
	p{
		background: #fff;
		padding: 2rem 0.5rem;
	}
</style>