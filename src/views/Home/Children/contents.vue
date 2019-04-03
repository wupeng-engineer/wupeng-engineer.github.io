<template>
  <div class="contents">
    <vue-scroll :ops="ops">
      <div v-for="(item,key,index ) in items" v-bind:key="index">
        <Card
          @openClick="openClick"
          @closeClick="closeClick"
          v-show="isShow=='all'||isShow==item.title"
          :title="item.title"
          :contents="item.contents"
          :time="item.time"
          :info="item.info"
        ></Card>
      </div>
    </vue-scroll>
  </div>
</template>

<script>
//文章列表
import Card from "@/components/homeComponents/card/index.vue";
export default {
  name: "contents",
  data() {
    return {
      isShow: "all",
      ops: {
        bar: {
          opacity: 0
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
    //dom渲染后
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
  width: 752px;
  position: absolute;
  left: 50%;
  margin-left: -376px;
  height: calc(100% - 150px);
  overflow: hidden;
  margin-top: 20px;
}
</style>
