<template>
	<div>
        <me-header-tab title="动态" router="/me"></me-header-tab>
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
				msg:'这里应该有些动态'
			}
		},
		components:{
			MeHeaderTab
		}
	}
</script>