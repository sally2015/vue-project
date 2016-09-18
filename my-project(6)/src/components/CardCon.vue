<template>
	<div class="card" v-on:click="goDetail">
      	<slot></slot>   
    </div>
</template>
<script>
import $ from 'zepto';
	export default {
		props:{
			id:'',
			status:''
		},
		methods:{
			 goDetail (){
		        this.$dispatch('GoDetailRouter', $(this.$el).index())
		      }
		}
	}
</script>