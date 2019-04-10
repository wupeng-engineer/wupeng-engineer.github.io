<template>
  <div class="home">

    <Head />
    <main-box>
      <router-view></router-view>
    </main-box>
    <Foot />
  </div>
</template>

<script>
import "vuescroll/dist/vuescroll.css";
import Head from "@/components/home/head.vue";
import MainBox from "@/components/home/mainBox.vue";
import Foot from "@/components/home/foot.vue";
export default {
  name: "home",
  components: {
    Head,
    Foot,
    MainBox
  }
};
</script>