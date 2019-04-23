<!-- 提示框 -->
<template>
  <div>
    <button @click="openI()">info</button>
    <button @click="openW()">warn</button>
    <button @click="openE()">error</button>
    <button @click="openS()">success</button>
    <button @click="openL()">loading</button>
    <button @click="closeL()">closeL</button>
    <button @click="openMsg()">message</button>
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
    openI() {
      this.$toast.info({ content: "info" });
    },
    openW() {
      this.$toast.warn({ content: "warn" });
    },
    openE() {
      this.$toast.error({ content: "error" }); // or this.$toast.bottom('bottom');
    },
    openS() {
      this.$toast.success({ content: "success" }); // or this.$toast.bottom('bottom');
    },
    openL() {
      this.$loading.open("loading...");
      setTimeout(() => this.$loading.close(), 3000);
    },
    openMsg() {
      this.$msgBox
        .showMsgBox({
          title: "添加分类",
          content: "请填写分类名称",
          isShowInput: true
        })
        .then(async val => {})
        .catch(() => {});
    }
  }
};
</script>
 
<style lang="less" scoped>
button {
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #d3d3d3;
  margin: 0 5px;
  cursor: pointer;
}
</style>