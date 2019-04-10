<template>
  <div class="card">
    <div class="title-box">
      <span class="title">{{title}}</span>
      <span class="close" @click="cClick"></span>
    </div>
    <div :class="{'content-box':true,'active':isActive}" @click="oClick(id)">
      <div class="contents">{{contents}}</div>
    </div>
    <div class="handle-box">
      <div class="time">
        <span>
          发布时间:
          {{time}}
        </span>
      </div>
      <div class="info">
        <span>评论:{{info.comment}}</span>
        <span>收藏:{{info.collect}}</span>
        <span>浏览:{{info.glance}}</span>
        <span>分享</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["title", "time", "contents", "info", "id"],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    oClick() {
      this.isActive = true;
      this.$emit("openClick", arguments[0]);
    },
    cClick() {
      this.$emit("closeClick", "all");
      this.isActive = false;
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.card {
  width: 752px;
  margin: 5px auto;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  background: #fff;
  &:hover {
    box-shadow: 0px 0px 10px #7e717148;
  }
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
    padding: 5px 0px;
    overflow: hidden;
    font-size: 16px;
    word-wrap: break-word;
    width: 100%;
    min-height: 100px;
    cursor: pointer;
    &.active {
      height: 100%;
    }
    .contents {
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
