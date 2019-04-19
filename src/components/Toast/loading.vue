<template>
  <div v-show="show" class="lx-load-mark">
    <div class="lx-load-box">
      <div class="lx-loading">
        <div class="loading_leaf loading_leaf_0"></div>
        <div class="loading_leaf loading_leaf_1"></div>
        <div class="loading_leaf loading_leaf_2"></div>
        <div class="loading_leaf loading_leaf_3"></div>
        <div class="loading_leaf loading_leaf_4"></div>
        <div class="loading_leaf loading_leaf_5"></div>
        <div class="loading_leaf loading_leaf_6"></div>
        <div class="loading_leaf loading_leaf_7"></div>
        <div class="loading_leaf loading_leaf_8"></div>
        <div class="loading_leaf loading_leaf_9"></div>
        <div class="loading_leaf loading_leaf_10"></div>
        <div class="loading_leaf loading_leaf_11"></div>
      </div>
      <div class="lx-load-content">{{tips}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tips: "",
      show: false
    };
  }
};
</script>
<style src="./toast.css">
</style>