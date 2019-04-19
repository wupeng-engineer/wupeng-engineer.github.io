<template>
  <div class="yd-container-header">
    <div class="yd-logo"></div>
    <div class="yd-header-nav">
      <div class="yd-nav" v-for="(item,key,index) in items" v-bind:key="index" v-bind:id="item.id">
        <a>{{item.title}}</a>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from "@/views/interface/res.js";
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    var that = this;
    navBar().then(res => {
      console.log(res);
      that.items = res.items;
    });
  }
};
</script>
<style lang="less" scoped>
.yd-container-header {
  width: 100%;
  height:60px;
  .yd-logo {
    float: left;
    width: 200px;
    height: 50px;
    background: #d3d3d3;
    margin: 5px 20px;
  }
  .yd-header-nav {
    float: right;
    margin-right: 20px;
    .yd-nav {
      background: #d3d3d3;
      display: inline-block;
      width: 80px;
      height: 30px;
      margin: 15px 5px;
      text-align: center;
      a {
        line-height: 30px;
      }
    }
  }
}
</style>
