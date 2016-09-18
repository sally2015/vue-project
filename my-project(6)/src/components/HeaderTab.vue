<template>
	<div class="bar bar-nav">
      <h1 class='title' v-text="title"></h1>
      <span class="icon" v-bind:class="iconClass"></span>
  	</div>
</template>
<script>
	export default {
		props:{
			title:'',
			icon:''
		},
		computed: {
			iconClass () {
				return "icon-"+this.icon
			}
		}
	}
</script>
<style scoped>
	.bar,
	h1{
		color:#0a8ddf;
	}
</style>