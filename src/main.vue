<template>
  <div>
      <bar v-if="isIndex" class="bar bar-tab">
            <bar-item path="/home" label="首页" icon="home"></bar-item>
            <bar-item path="/search" label="发现" icon="search"></bar-item>
            <bar-item path="/message" label="消息" icon="message"></bar-item>
            <bar-item path="/me" label="我" icon="me"></bar-item>
        </bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Bar from './components/Bar';
import BarItem from './components/BarItem';


export default {
  data () {
    return {
      isIndex :  true
    }
  },
  components: {
    Bar,
    BarItem
  }
}
</script>

<style>
    @import './assets/css/sm.css';

</style>
