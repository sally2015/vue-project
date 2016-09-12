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

        <tab-con id="tab1" status="active" >
        <!-- 包裹遮罩层和内容 -->
          <refresh-con  v-pull-to-refresh="refreshAll" title="动态" distance="55" arr="task1">
              <v-layer></v-layer>
              <div class="card-container">
                <card-con v-for="task in task1 | orderBy 'id' -1 ">
                      <card-item type="header">
                         {{task.title}}
                      </card-item>
                      <card-item type="content">
                          <card-item type="content-inner">
                            {{task.content}}
                          </card-item>
                      </card-item>
                  </card-con>
                </div>
            </refresh-con>
        </tab-con>
         <tab-con id="tab2">
            <refresh-con  v-pull-to-refresh="refreshAll" title="前端" distance="55" arr="task2">
              <v-layer></v-layer>
              <div class="card-container">
                <card-con v-for="task in task2 | orderBy 'id' -1 ">
                      <card-item type="header">
                          {{task.title}}
                      </card-item>
                      <card-item type="content">
                          <card-item type="content-inner">
                            {{task.content}}
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
    $.init();
    // this.initTaskData()
    console.log('init1')

  },
  data () {
    return {
      task1 : [{
          id: 1,
          title: '动态card1',
          content: '这里是第1个card，下拉刷新会出现第2个card'
        }],
      task2 : [{
        id: 1,
          title: '前端card1',
          content: '这里是第1个card，下拉刷新会出现第2个card'
      }]
    }
  },
  methods: {
      refreshAll ($el) {
        
          $.showIndicator() //显示指示器 modal
          setTimeout(function () {
            let cardNumber = $el.find('.card').length+1
            let id = cardNumber;
            let title = $el.attr('data-title')+cardNumber;
            let content = `这里是第${cardNumber}个card，下拉刷新会出现第${cardNumber + 1}个card。`
            let arrName = $el.attr('data-arr')

              this[arrName].push({
                  id:id,
                  title:title,
                  content:content
              });
             // 加载完毕需要重置
              $.pullToRefreshDone('.pull-to-refresh-content');
               console.log(this.task2)
             $.hideIndicator()
          }.bind(this), 500)
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
