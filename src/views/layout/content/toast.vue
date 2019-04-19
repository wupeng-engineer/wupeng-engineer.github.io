<!-- 提示框 -->
<template>
  <div>
    <button @click="openTop()">top</button>
    <button @click="openCenter()">center</button>
    <button @click="openBottom()">bottom</button>
    <button @click="openLoading()">loading</button>
  </div>
</template>
 
<script>
export default {
  name: "Toast",
  data() {
    return {
      //
    };
  },
  methods: {
    openTop() {
      this.$toast.top("top");
    },
    openCenter() {
      this.$toast.center("center");
    },
    openBottom() {
      this.$toast("bottom"); // or this.$toast.bottom('bottom');
    },
    openLoading() {
      this.$loading("loading...");
      let self = this;
      setTimeout(function() {
        self.closeLoading();
      }, 2000);
    },
    closeLoading() {
      this.$loading.close();
    }
  }
};
</script>
 
<style lang="less" scoped>
button{
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #d3d3d3;
  margin: 0 5px;
  cursor: pointer;
}
</style>