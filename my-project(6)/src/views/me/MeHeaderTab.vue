<template>
	<div class="bar bar-nav">
	    <h1 class='title' v-text="title"></h1>
	    <a class="icon icon-left" v-link="{path: router}"></a>
  	</div>
</template>
<script>

	export default {
		props:{
		    title:'',
		    router:''
		  }
	}
</script>