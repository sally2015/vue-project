<template>
    <div class="content">
        
      <div class="content-padded grid-demo">
        
        <div v-for="list in lists" class="row">
           <div class="col-50">
             <a class="tab-item" v-link="{ path: list[0].path}">
              <span class="icon"  v-bind:class="list[0].icon"></span><br>
              <span class="tab-label">{{list[0].title}}</span>
            </a>
          </div>
          <div class="col-50">
             <a class="tab-item" v-link="{ path: list[1].path}">
              <span class="icon"  v-bind:class="list[1].icon"></span><br>
              <span class="tab-label">{{list[1].title}}</span>
            </a>
          </div>
        </div> 
      </div>
    </div>
</template>

<script>
import $ from 'zepto';
export default {
  ready (){
     $.init();
  },
  computed: {
      iconClass () {
        return "icon-"+this.icon
      }
  },
  props:{
    icon:'',
    lists:''
  },
  components:{
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
    display: block;
  }
  .row .col-50{
    padding: 0.9rem 0;
    height: 4rem;
  }
  .grid-demo{
    position: relative;
  }

  .bar-nav~.content {
    top: 20.2rem;
    bottom: 3rem;
}
.col-50{
  background: #fff;
  margin-bottom: 0.5rem;
  text-align: center;
}
.tab-item{
  display: block;
}
.tab-label{
  color: #555;
  font-family: '黑体';
  font-size: 0.8rem;
}
</style>
<style>
  .me-container{
    padding-top:2.2rem;
  }
</style>

