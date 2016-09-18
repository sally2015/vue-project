<template>
       	<div :class="classType">
       		<slot></slot>
       	</div>
</template>
<script>
	export default {
		props:{
			type:''
			
		},
		computed:{
			classType () {
				return 'card-'+this.type
			}
		}
	}
</script>