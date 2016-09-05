<template>
	<!-- 加载tips -->
	<div class="tips">努力加载中...</div>
	<!-- <div class="pacman">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> -->
</template>
<script>
	export default(){
		ready () {
			setTimeout( () => {
				console.log(this);
				this.$route.router.go({
					path:'/home',
					replace:true
				});
			},1500);
		}
	}
</script>
<style scoped>
	
</style>