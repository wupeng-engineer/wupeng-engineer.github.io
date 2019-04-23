<template>
  <div class="card-container">
    <div class="card-header">
      <div class="card-img">
        <img :src="src">
      </div>
      <div class="card-info">{{title}}</div>
      <ul class="card-tool">
        <li
          class="tag"
          v-for="(tag,key,index) in tags"
          v-bind:key="index"
          :style="{background:tag.bgColor,color:tag.fColor}"
          v-bind:id="tag.id"
        >{{tag.title}}</li>
      </ul>
    </div>
    <div class="card-content">
      <div>
         <p>简介</p>
         <div class="ellipsis">
           {{content}}
         </div>
      </div>
    </div>
    <ul class="card-footer">
        <li>999+</li>
        <li>12</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: "static/images/no-pic.png",
      title: "vue代码",
      tags: [
        {
          id: "0001",
          title: "标签",
          bgColor: "red",
          fColor: "#fff"
        }
      ],
      content:"一般一个产品在交付给用户使用之后，对于公司（开发者），无论是后续产品的改进，还是数据的价值来说，了解用户使用情况都是必不可少的。"
    };
  }
};
</script>
<style src="./card.less" lang="less">
</style>
