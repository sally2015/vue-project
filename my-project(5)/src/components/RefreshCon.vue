<template>
	<div v-bind:index="index">
         <slot></slot>
   	</div>
</template>
<script>
	export default {
		props:{
			index:''
		}
	}
</script>