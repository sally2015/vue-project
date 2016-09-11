<template>
	<div class="card">
      	<slot></slot>   
    </div>
</template>
<script>
	export default {
		props:{
			id:'',
			status:''
		}
	}
</script>