<template>
  <div>
    <div class="yd-container">
      <div class="yd-header">
        <Navbar></Navbar>
      </div>
      <div class="yd-main">
        <div class="yd-content"></div>
        <div class="yd-content-footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Navbar } from "@/views/layout/content";
export default {
  components: {
    Navbar
  }
};
</script>
<style lang="less" scoped>
.yd-container {
  background: #f1f1f1;
  width: 100%;
  .yd-header {
    background: #f1f1f1;
    position: fixed;
    top: 0;
    z-index: 10;
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
    .yd-content {
      padding: 20px 200px 220px;
    }
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