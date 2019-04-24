<!-- 提示框 -->
<template>
  <div>
    <div class="title">工具</div>
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
import Card from "@/components/card/card";
export default {
  name: "cards",
  data() {
    return {};
  },
  components: {
    Card
  }
};
</script>
 
<style lang="less" scoped>
</style>