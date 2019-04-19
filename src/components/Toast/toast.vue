<template>
  <div v-show="show" class="lx-toast-top lx-toast lx-word-wrap">{{message}}</div>
</template>
<script>
export default {
  props:{
      show: false,
      message: '',
    }
};
</script>
<style src="./toast.css">
</style>
