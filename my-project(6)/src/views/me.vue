<template>
  <div>
     <header-tab icon="settings" title="me">
      
    </header-tab>
    <div class="img-area">
      <img src="../../static/img/me/large.jpg">
    </div>
    <user-detail v-bind:user-data='userData'>
      
    </user-detail>
    <user-refer v-bind:lists='lists'>
      
    </user-refer>
  </div>
</template>

<script>
import HeaderTab from '../components/HeaderTab.vue';
import UserDetail from '../components/UserDetail.vue';
import UserRefer from '../components/UserRefer.vue';
import $ from 'zepto';
export default {
  ready (){
     $.init();
  },
  data () {
    return {
      userData: {
            src:"../../static/img/me/avatar.jpg",
            nickname:'obeing',
            des:'这是描述',
            score:10,
            following:1,
            follower:2
         },
         lists :[
          [{
            title:'动态',
            icon:'icon-app',
            path:'/me/moment'
          },
          {
            title:'访客',
            icon:'icon-friends',
            path:'/me/friends'  
          }],
          [{
            title:'文章',
            icon:'icon-menu',
            path:'/me/articles'  
          },
          {
            title:'最佳实现',
            icon:'icon-browser',
            path:'/me/practice'  
          }],
          [{
            title:'阅读',
            icon:'icon-code',
            path:'/me/read'  
          },
          {
            title:'收藏列表',
            icon:'icon-star',
            path:'/me/love'  
          }]
      ]
      
    }

  },
  components:{
    HeaderTab,
    UserDetail,
    UserRefer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img-area{
    width: 100%;

  }
  .img-area img{
    width: 100%;
    height:9rem;
    display: block;
  }

</style>
