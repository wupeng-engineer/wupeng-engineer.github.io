<template>
  <div class="card">
    <div class="title-box">
      <span class="title">{{title}}</span>
      <span class="close" @click="cClick"></span>
    </div>
    <div class="content-box" @click="oClick(title)">
      <div class="content">{{content}}</div>
    </div>
    <div class="handle-box">
      <div class="time">
        <span>
          发布时间:
          {{time}}
        </span>
      </div>
      <div class="info">
        <span>评论:0</span>
        <span>收藏:2</span>
        <span>浏览:100</span>
        <span>分享</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["title", "content", "time","index"],
  data() {
    return {};
  },
  methods: {
    oClick() {
      console.log(arguments[0]);
      this.$emit("openClick", arguments[0]);
    },
    cClick() {
      this.$emit("closeClick", "all");
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.card {
  width: 712px;
  margin: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  background: #fff;
  box-shadow: 11px 11px 1px #7e717142;
  .title-box {
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: #000;
    border-bottom: 1px solid #d3d3d3;
    .title {
      margin: 0 10px;
      line-height: 40px;
      float: left;
    }
    .close {
      margin: 0 10px;
      float: right;
      width: 40px;
      height: 40px;
      background: #0aa1ed;
    }
  }
  .content-box {
    font-size: 16px;
    word-wrap: break-word;
    width: 100%;
    min-height: 100px;
    cursor: pointer;
    .content {
      margin: 10px;
      word-wrap: break-word;
      text-indent: 20px;
    }
  }
  .handle-box {
    border-top: 1px solid #d3d3d3;
    width: 100%;
    height: 60px;
    .time {
      font-size: 14px;
      margin: 10px;
    }
    .info {
      font-size: 14px;
      margin: 10px;
      span {
        float: left;
        margin-right: 5px;
      }
    }
  }
}
</style>
