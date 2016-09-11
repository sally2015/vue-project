<template>
<div>
  <header-tab icon="edit" title="HomeTab">
      
  </header-tab>
  <div class="content">
    <tab-wrap>
      <v-button path="#tab1" label="动态" status="active"></v-button>
      <v-button path="#tab2" label="前端"></v-button>
    </tab-wrap>
    <div class="content-block">
      <div class="tabs">

        <tab-con id="tab1" status="active">
        <!-- 包裹遮罩层和内容 -->
          <refresh-con  v-if="ok" v-pull-to-refresh="refreshNews" distance="55">
            <!-- 正在刷新的遮罩层 -->
            <v-layer></v-layer>
            <!-- 下拉刷新时append到card-container -->
            <div class="card-container">
                <card-con> <!--.card -->
                    <card-item type="header">
                        card1动态
                    </card-item>
                    <card-item type="content">
                        <card-item type="content-inner">
                          这里是第1个card，下拉刷新会出现第2个card
                        </card-item>
                    </card-item>
                </card-con>
            </div>
           </refresh-con>
        </tab-con>
         <tab-con id="tab2">
            <refresh-con v-pull-to-refresh="refreshFront" distance="55">
              <v-layer></v-layer>
              <div class="card-container">
                <card-con>
                      <card-item type="header">
                          card1前端
                      </card-item>
                      <card-item type="content">
                          <card-item type="content-inner">
                            这里是第1个card，下拉刷新会出现第2个card
                          </card-item>
                      </card-item>
                  </card-con>
                </div>
            </refresh-con>
        </tab-con>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import HeaderTab from '../components/HeaderTab.vue';
import TabWrap from '../components/TabWrap.vue';
import VButton from '../components/Button.vue';
import TabCon from '../components/TabCon.vue';
import VLayer from '../components/Layer.vue';
import CardCon from '../components/CardCon.vue';
import CardItem from '../components/CardItem.vue';
import RefreshCon from '../components/RefreshCon.vue';
import $ from 'zepto';
export default {
  ready () {
    $.init()
  },
  data () {
    return {
      
    }
  },
  methods: {
      refreshNews () {
          $.showIndicator() //显示指示器 modal
          setTimeout(function () {
            let cardNumber = $(this.$el).find('.card').length
            let cardHTML = '<div class="card">' +
            '<div class="card-header">card' + cardNumber + '</div>' +
            '<div class="card-content">' +
            '<div class="card-content-inner">' +
            '这里是第' + cardNumber + '个card，下拉刷新会出现第' + (cardNumber + 1) + '个card。' +
            '</div>' +
            '</div>' +
            '</div>'
            $(this.$el).find('.card-container').prepend(cardHTML);

             // 加载完毕需要重置
            $.pullToRefreshDone('.pull-to-refresh-content');
            debugger;
             $.hideIndicator()
          }.bind(this), 1500)
      },
      refreshFront () {//定义两个不同的函数区别添加的数据
           $.showIndicator() //显示指示器 modal
            setTimeout(function () {
              let cardNumber = $(this.$el).find('.card').length
              let cardHTML = '<div class="card">' +
              '<div class="card-header">card' + cardNumber + '</div>' +
              '<div class="card-content">' +
              '<div class="caBrd-content-inner">' +
              '这里是第' + cardNumber + '个card，下拉刷新会出现第' + (cardNumber + 1) + '个card。' +
              '</div>' +
              '</div>' +
              '</div>'
              $(this.$el).find('.card-container').prepend(cardHTML);

               // 加载完毕需要重置
              $.pullToRefreshDone('.pull-to-refresh-content');
              debugger;
               $.hideIndicator()
            }.bind(this), 1500)
        }
  },
  components:{
    HeaderTab,
    TabWrap,
    VButton,
    TabCon,
    VLayer,
    CardCon,
    CardItem,
    RefreshCon
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}

.buttons-tab{
    z-index: 3;
}
.pull-to-refresh-content{
  top:0;
}
</style>
