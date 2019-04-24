<template>
  <div>
    <div class="yd-container">
      <div class="yd-header">
        <Navbar></Navbar>
      </div>
      <div class="yd-main">
        <div class="yd-content" :class="{edits:isEdit}">
          <router-view></router-view>
        </div>
        <div class="yd-content-footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Navbar } from "@/views/layout/content";
export default {
  data() {
    return {
      isEdit: false
    };
  },
  components: {
    Navbar
  }
};
</script>

<style lang="less" scoped>
.yd-container {
  width: 100%;
  .yd-header {
    position: fixed;
    top: 0;
    z-index: 1510;
    width: 100%;
    height: 60px;
    border: 1px solid #d3d3d3;
    box-shadow: 0px 2px 1px #d3d3d381;
  }
  .yd-main {
    position: absolute;
    top: 60px;
    width: 100%;
    min-height: calc(100% - 60px);
    .yd-content-footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 200px;
      background: rgb(34, 34, 34);
    }
  }
}
</style>
<style  lang="less">
.yd-content {
  width: 1100px;
  padding: 5px 5px 220px;
  margin: 0 auto;
  overflow: hidden;
}
.edits {
  width: 100%;
  padding: 0px;
  padding-bottom: 220px;
}
</style>