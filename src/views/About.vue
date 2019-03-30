<template>
  <div class="about">
    <left/>
    <header/>
    <content/>
  </div>
</template>

<script>
// @ is an alias to /src
import Left from '@/components/public/left.vue'
import Header from '@/components/public/header.vue'
import Content from '@/components/public/content.vue'

export default {
  name: 'about',
  components: {
    Left,
    Header,
    Content  
  }
}
</script>