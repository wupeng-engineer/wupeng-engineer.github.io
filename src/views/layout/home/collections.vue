<!-- 提示框 -->
<template>
  <div>
    <div class="title">工具</div>
    <Card :index="1"></Card>
    <Card :index="2"></Card>
    <Card :index="3"></Card>
    <Card :index="4"></Card>
    <Card :index="5"></Card>
    <Card :index="6"></Card>
    <Card :index="7"></Card>
    <Card :index="8"></Card>
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