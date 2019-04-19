<template>
  <div class="yd-container-header">
    <div class="yd-logo"></div>
    <div class="yd-header-nav">
      <div class="yd-nav" v-for="(item,key,index) in items" v-bind:key="index" v-bind:id="item.id">
        <a>{{item.title}}</a>
      </div>
      <div class="yd-nav" v-if="!this.$store.getters.getToken">
        <a @click="signIn">登录</a>
      </div>
      <div class="yd-nav" v-if="this.$store.getters.getToken">
        <a @click="openInfo">个人中心</a>
      </div>
      <div class="yd-nav" v-if="this.$store.getters.getToken">
        <a @click="signOut">退出</a>
      </div>
    </div>
  </div>
</template>
<script>
import { getNavBar } from "@/views/interface/res.js";
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    var that = this;
    getNavBar().then(res => {
      that.items = res.items;
    });
  },
  methods: {
    signIn(){
      this.$store.commit("SET_LOGIN", true);
    },
    openInfo(){

    },
    signOut(){
       this.$store.dispatch("SignOut");
    }
  }
};
</script>
<style lang="less" scoped>
.yd-container-header {
  width: 100%;
  height: 60px;
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
      cursor: pointer;
      a {
        line-height: 30px;
      }
    }
  }
}
</style >
<style lang="less">
.yd-nav {
  a{
     color: #373838;
  }
  &:hover a {
    color: #0aa1ed;
  }
}
</style>
