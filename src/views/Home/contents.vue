<template>
  <div class="contents">
    <vue-scroll :ops="ops">
      <div v-for="(item,key,index ) in items" v-bind:key="index">
        <Card @openClick="openClick" @closeClick="closeClick" v-show="isShow=='all'||isShow==item.id" :title="item.title" :contents="item.contents" :time="item.time" :info="item.info" :id="item.id"></Card>
      </div>
    </vue-scroll>
  </div>
</template>
<script>
import Card from "@/components/common/card.vue";
export default {
  name: "contents",
  data() {
    return {
      isShow: "all",
      ops: {
        bar: {
          opacity: 1
        }
      },
      items: []
    };
  },
  created() {
    let that = this;
    this.$http({
      method: "get",
      url: "/api/home/content"
    })
      .then(function(res) {
        if (res.data.code == 200) {
          that.items = res.data.items;
        } else {
          console.log(res.data.message);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted() {
    this.$nextTick(function() {});
  },
  methods: {
    openClick() {
      this.isShow = arguments[0];
    },
    closeClick() {
      this.isShow = arguments[0];
    }
  },
  components: {
    Card
  }
};
</script>

<style lang="less" scoped>
.contents {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
