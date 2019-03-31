<template>
  <div class="nav-box">
    <div class="nav-box-warp">
      <div class="right-nav-blog">
        <ul class="right-li">
          <li v-for="(item,key,index) in items" v-bind:key="index" v-bind:id="item.id" :class="{active:item.id==current}"  @click="relationClick(item.id,item.tabblank)">
              {{item.title}}
          </li>
        </ul>
      </div>
      <div class="left-blog">吴小二博客</div>
    </div>
  </div>
</template>
<script>
import "../../../assets/styles/less/index/index.less";
export default {
  data() {
    return {
      items: [
        { title:"首页", id:"home",tabblank:"/home" },
        { title:"代码", id:"code",tabblank:"/code"  },
        { title:"论坛", id:"forum",tabblank:"/forum"  },
        { title:"社区", id:"community",tabblank:"/community" }
      ],
      current:'home'
    };
  },
  methods: {
      relationClick:function(id,path){
        console.log(id);
          this.current=id;
          this.$router.push({path:path});
        }
  },
  components: {}
};
</script>
<style lang="less">
</style>