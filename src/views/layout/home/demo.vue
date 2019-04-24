<!-- 提示框 -->
<template>
  <div class="demo">
      <div class="title">实例</div>
      <Panel></Panel>
      <Panel></Panel>
      <Panel></Panel>
      <Panel></Panel>
      <Panel></Panel>
      <Panel></Panel>
  </div>
</template>
 
<script>
import Panel from '@/components/panel/panel'
export default {
  name: "demo",
  data() {
    return {};
  },
  components:{
      Panel
  }
};
</script>
 
<style lang="less" scoped>
</style>