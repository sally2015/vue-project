<template>
  <div>
      <bar class="bar bar-tab">
            <a class="tab-item external active" href="#">
                <span class="icon icon-home"></span>
                <span class="tab-label">首页</span>
            </a>
            <a class="tab-item external" href="#">
                <span class="icon icon-search"></span>
                <span class="tab-label">发现</span>
            </a>
            <a class="tab-item external" href="#">
                <span class="icon icon-message"></span>
                <span class="tab-label">消息</span>
            </a>
            <a class="tab-item external" href="#">
                <span class="icon icon-me"></span>
                <span class="tab-label">我</span>
            </a>
        </bar>
      <a v-link="{ path: '/foo' }">Go to Foo</a>
      <a v-link="{ path: '/bar' }">Go to Bar</a>
    <router-view></router-view>
  </div>
</template>

<script>
import Bar from './components/Bar';
import BarItem from './components/BarItem';


export default {
  components: {
    Bar,
    BarItem
  }
}
</script>

<style>
    @import './assets/css/sm.css';

</style>
