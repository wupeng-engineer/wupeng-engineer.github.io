<template>
  <div id="app">
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
