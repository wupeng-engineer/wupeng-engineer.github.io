<style scoped lang="less">
.t-newtab-container {
  width: 100%;
  height: 50px;
  line-height: 48px;
  background: white;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px;
  overflow: hidden;
  .t-newtab-list {
    cursor: pointer;
    margin-left: 15px;
    border-bottom: 2px solid #0099fc;
    margin-right: 25px;
    float: left;
  }
  .t-newtab-show {
    cursor: pointer;
    margin-left: 15px;
    border-bottom: 2px solid white;
    margin-right: 25px;
    float: left;
    color: #666;
  }
  .t-newtab-show:hover {
    color: #38f;
  }
  .t-color38f {
    color: #38f;
  }
  .t-newtab-show1 {
    cursor: pointer;
    margin-left: 15px;
    border-bottom: 2px solid white;
    margin-right: 25px;
    float: left;
    color: #666;
  }
}
</style>

<template>
  <div class="t-newtab-container">
    <div v-if="meta.type==1">
      <div
        v-for="(item,index) in meta.status"
        :key="index"
        :class="status==item.value?'t-newtab-list':'t-newtab-show'"
        @click="changStatus(item)"
      >{{item.title}}</div>
    </div>
    <div v-else-if="meta.type==2">
      <div class="t-newtab-show1">
        <span
          v-for="(item,index) in meta.status"
          :key="index"
          :class="index==0?'t-color38f':''"
          @click="changHome(item)"
        >{{index!=0?'/':''}}{{item.title}}</span>
      </div>
    </div>
    <div v-else>
      <div v-for="(item,index) in meta.status" :key="index" class="t-newtab-show1">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import Utils from "@/utils/utils";

export default {
  props: {
    status: "",
    meta: { status: [] }
  },
  created() {
    this.meta = Utils.deep(this.$route.meta);
    if (this.meta.type == 1) {
      if (this.$route.query[this.meta.status[0].Field]) {
        this.status = String(
          Utils.deep(this.$route.query[this.meta.status[0].Field])
        );
      } else {
        this.status = "";
      }
    }
  },
  watch: {
    onRouteChanged(route, oldRoute) {
      this.meta = Utils.deep(route.meta);
      if (this.meta.type == 1) {
        if (route.query[this.meta.status[0].Field]) {
          this.status = String(
            Utils.deep(route.query[this.meta.status[0].Field])
          );
        } else {
          this.status = "";
        }
      }
    },
    changStatus(item) {
      let data = Utils.deep(this.$route.query);
      if (item.value === "") {
        [data.pageNum] = [1];
        delete data[item.Field];
      } else {
        [data.pageNum, data[item.Field]] = [1, item.value];
      }
      this.$store.dispatch("paramsUrl", data).then(res => {
        this.$router.push(`${this.$route.path}${res}`);
      });
    },
    changHome(item) {
      this.$router.push(`${item.value}`);
    }
  }
};
</script>


