<template>
  <div class="about">
    <Header/>
    <Content/>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/public/header.vue'
import Content from '@/components/public/content.vue'

export default {
  name: 'home',
  components: {
    Header,
    Content  
  }
}
</script>