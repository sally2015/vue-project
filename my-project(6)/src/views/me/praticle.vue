<template>
	<div>
        <me-header-tab title="最佳实现" router="/me"></me-header-tab>
        <div class="me-container">
        	{{msg}}
        </div>
   	</div>
</template>
<script>
import MeHeaderTab from '../me/MeHeaderTab.vue';
	export default {
		ready (){
	     $.init();
	  },
		data (){
			return {
				msg:'这里应该有些最佳实现'
			}
		},
		components:{
			MeHeaderTab
		}
	}
</script>
