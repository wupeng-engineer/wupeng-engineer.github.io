<template>
  <div class="yd-container-header">
    <div class="yd-logo"></div>
    <div class="yd-header-nav">
      <div
        class="yd-nav"
        v-for="(item,key,index) in items"
        v-bind:key="index"
        v-bind:id="item.id"
        :class="{active:isActive==item.id}"
      >
        <a @click="setNav(item.id,item.tabblank)">{{item.title}}</a>
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
    <ul class="yd-theme">
      <li
        v-for="(theme,key,index) in themes"
        v-bind:key="index"
        :class="theme"
        @click="setColor(theme)"
      ></li>
    </ul>
  </div>
</template>
<script>
import { getNavBar } from "@/views/interface/res.js";
export default {
  data() {
    return {
      themes: ["default", "red", "black"],
      items: [],
      isActive: "home"
    };
  },
  created() {
    var that = this;
    getNavBar().then(res => {
      that.items = res.items;
    });
  },
  updated() {},
  methods: {
    signIn() {
      this.$store.commit("SET_LOGIN", true);
    },
    openInfo() {},
    signOut() {
      this.$store.dispatch("SignOut");
    },
    setColor(command) {
      document.getElementById("app").className = "theme-" + command;
    },
    setNav(id, path) {
      this.isActive = id;
      this.$router.push({ path: path });
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
  .yd-theme {
    float: right;
    height: 60px;
    li {
      float: left;
      width: 30px;
      height: 30px;
      margin: 15px 5px;
      cursor: pointer;
      border: 1px solid #ffffff;
      box-sizing: border-box;
    }
  }
  .yd-header-nav {
    float: right;
    margin-right: 20px;
    .yd-nav {
      display: inline-block;
      margin: 15px 5px;
      text-align: center;
      cursor: pointer;
      a {
        display: inline-block;
      }
    }
  }
}
</style >
<style lang="less">
.yd-nav {
  background: #d3d3d3;
  a {
    height: 30px;
    width: 80px;
    color: #373838;
    line-height: 30px;
  }
  &:hover a {
    color: #ffffff;
  }
  &.active {
    background: #0aa1ed;

    a {
      color: #d3d3d3;
    }
  }
}
</style>
