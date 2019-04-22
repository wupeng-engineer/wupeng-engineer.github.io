<template>
  <div id="app" class="theme-default">
    <Login v-if="this.$store.getters.getLogin"></Login>
    <router-view/>
  </div>
</template>
<script>
import Login from "@/views/login/login.vue";
export default {
  data() {
    return {
      login: ""
    };
  },
  methods: {
  },
  components: {
    Login
  }
};
</script>
<style src="@/assets/theme/color.less" lang="less">

</style>

