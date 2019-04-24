<!-- 提示框 -->
<template>
  <div class="demo">
      <div class="title">实例</div>
      <Panel :index="1"></Panel>
    <Panel :index="2"></Panel>
    <Panel :index="3"></Panel>
    <Panel :index="4"></Panel>
    <Panel :index="5"></Panel>
    <Panel :index="6"></Panel>
    <Panel :index="7"></Panel>
    <Panel :index="8"></Panel>
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