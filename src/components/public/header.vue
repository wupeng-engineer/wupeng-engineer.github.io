<template>
  <div class="nav-box">
    <div class="nav-box-warp">
      <div class="right-nav-blog">
        <ul class="right-li">
          <li v-for="(item,key,index) in items" v-bind:key="index" v-bind:id="item.id" :class="{active:index==current}"  @click="relationClick(index)">
              {{item.title}}
          </li>
        </ul>
      </div>
      <div class="left-blog">吴小二博客</div>
    </div>
  </div>
</template>
<script>
import "../../assets/styles/less/index/index.less";
export default {
  data() {
    return {
      items: [
        { title:"首页", id:"home",tabblank:"/home" },
        { title:"代码", id:"code" },
        { title:"论坛", id:"pram2" },
        { title:"社区", id:"pram3" }
      ],
      current:0
    };
  },
  methods: {
      relationClick:function(index){
          this.current=index;
        }

  },
  components: {}
};
</script>
<style lang="less">
</style>