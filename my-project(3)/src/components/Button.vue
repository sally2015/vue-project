<template>
	<a :href="path" class="tab-link button" v-bind:class="status" v-text="label"></a>
</template>
<script>
	export default {
		props:{
			path:'',
			label:'',
			status:''
		}
	}
</script>
<style>
	
</style>
