<template>
	<div class="userDetail">
		<div class="wrap">
			<div class="avatar">
		   		<img v-bind:src="userData.src" alt="">
		   </div>
		   <h3>{{userData.nickname}}</h3>
		   <p class='des'>{{userData.des}}</p>
		   <div class="row">
		      <div class="col-33">
		      	{{userData.score}}<br>
		      	<span>声望</span>
		      	
		      </div>
		      <div class="col-33">
		      	{{userData.follower}}<br>
		      	<span>关注者</span>
		      	
		      </div>
		      <div class="col-33">
		      	
		      	{{userData.following}}<br>
		      	<span>关注</span>
		      	</div>
		    </div>
		</div>
	</div>
</template>
<script>
	export default {
	  props:{
	  	userData:''
	  }
	}
</script>
<style scope>
	img{
		display: inline-block;
	}
	.userDetail{
	    text-align: center;
	    background: #fff;
	    
	  }
	  .wrap{
	  	position: relative;
		top: -1rem;
	  }
	 .avatar img{
		
		border-radius:50%; 
		width: 2.5rem;
		
	 }
	 h3,
	 .des{
	 	margin:0;
	 }

	 .des{
	 	font-size: 0.6rem;
	 	color: #aaa;
	 }
	 .col-33 span{
	 	color: #aaa;
	 }
	
</style>