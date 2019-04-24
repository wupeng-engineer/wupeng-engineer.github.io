<!-- 提示框 -->
<template>
  <div class="home">
      <div class="title">主页</div>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
  </div>
</template>
 
<script>
import Card from '@/components/card/card'
export default {
  name: "home",
  data() {
    return {};
  },
  components:{
      Card
  }
};
</script>
 
<style lang="less" scoped>
</style>