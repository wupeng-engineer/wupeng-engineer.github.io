<template>
  <div class="nav-box">
    <Logo />
    <!-- <div class="nav-box-warp">
      <div class="right-nav-blog">
        <ul class="right-li">
          <li v-for="(item,key,index) in items" v-bind:key="index" v-bind:id="item.id" :class="{active:item.id==current}" @click="relationClick(item.id,item.tabblank)">
            {{item.title}}
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>
<script>
import "@/assets/styles/less/home/nav.less";
import Logo from "@/components/common/logo.vue";
export default {
  data() {
    return {
      items: [
        { title: "首页", id: "home", tabblank: "/home" },
        { title: "代码", id: "code", tabblank: "/code" },
        { title: "论坛", id: "forum", tabblank: "/forum" },
        { title: "社区", id: "community", tabblank: "/community" }
      ],
      current: "home"
    };
  },
  methods: {
    relationClick: function(id, path) {
      this.current = id;
      this.$router.push({ path: path });
    }
  },
  components: { Logo }
};
</script>
<style lang="less">
.nav-box {
  width: 100%;
  height: 50px;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}
</style>