<template>
  <div class="home">
    <login/>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/login/login.vue'

export default {
  name: 'index',
  components: {
    login
  }
}
</script>
<style scoped lang="less">
  
</style>