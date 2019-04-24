<template>
  <div class="panel" :class="{float:(parseInt(index) % 2)==0}">
    <div class="panel-info" >
      
    </div>
    <div class="panel-image">
      
    </div>
  </div>
</template>
<script>
export default {
  props:["index"]
};
</script>
<style src="./panel.less" lang="less" scoped>
</style>
