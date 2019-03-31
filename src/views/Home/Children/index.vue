<template>
  <div class="content">
    <vue-scroll :ops="ops">
      <div v-for="(item,key,index ) in items" v-bind:key="index">
        <Card
          @openClick="openClick"
          @closeClick="closeClick"
          v-show="isShow=='all'||isShow==item.title"
          :title="item.title"
          :content="item.content"
          :time="item.time"
        ></Card>
      </div>
    </vue-scroll>
  </div>
</template>

<script>
//文章列表
import Card from "@/components/homeComponents/card";
export default {
  name: "content",
  data() {
    return {
      isShow: "all",
      ops: {
        bar: {
          opacity: 0
        }
      },
      items: [
        {
          title: "第一篇文章",
          content:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          time: "2019-04-01 13:54:02"
        },
        {
          title: "第二篇文章",
          content:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          time: "2019-04-01 13:54:02"
        },
        {
          title: "第三篇文章",
          content:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          time: "2019-04-01 13:54:02"
        },
        {
          title: "第四篇文章",
          content:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          time: "2019-04-01 13:54:02"
        }
      ]
    };
  },
  methods: {
    openClick() {
      console.log("open",arguments[0])
      this.isShow = arguments[0];
    },
    closeClick() {
      console.log("close",arguments[0])
      this.isShow = arguments[0];
    }
  },
  components: {
    Card
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 752px;
  position: absolute;
  left: 50%;
  margin-left: -376px;
  height: 800px;
  overflow: hidden;
  margin-top: 20px;
}
</style>
