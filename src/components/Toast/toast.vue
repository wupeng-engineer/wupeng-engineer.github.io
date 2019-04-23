<template>
  <div class="toast">
    <p :class="type?`${type}`:''">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      type: "",
      content: "",
      duration: 5000
    };
  },
  mounted() {
    setTimeout(() => {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }, this.duration);
  }
};
</script>
<style lang="less" scoped>
.toast {
  position: relative;
  top: 10px;
  color: #fff;
  z-index: 9999;
  text-align: center;
  margin: 10px 0;
  p {
    animation: myfirst 5s;
    -moz-animation: myfirst 5s;
    -webkit-animation: myfirst 5s;
    -o-animation: myfirst 5s;
    display: inline-block;
    margin: 0 auto;
    padding: 10px 15px;
    font-size: 18px;
    border-radius: 4px;
    background: rgba(17, 17, 17, 0.7);
    &.error {
      background: rgb(253, 41, 41);
    }
    &.success {
      background: rgb(0, 206, 0);
    }
    &.info {
      background: #e2e2e2;
    }
    &.warn {
      background: rgb(252, 252, 55);
    }
  }
}
@keyframes myfirst {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  15% {
    transform: translateY(0px);
    box-shadow: 0 0 1px #acacac;
    opacity: 1;
  }
  85% {
    transform: translateY(0px);
    box-shadow: 0 0 1px #acacac;
    opacity: 1;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0;
  }
}

@-moz-keyframes myfirst /* Firefox */ {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  15% {
    transform: translateY(0px);
    box-shadow: 0 0 1px #acacac;
    opacity: 1;
  }
  85% {
    transform: translateY(0px);
    box-shadow: 0 0 1px #acacac;
    opacity: 1;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0;
  }
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */ {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  15% {
    transform: translateY(0px);
    box-shadow: 0 0 1px #acacac;
    opacity: 1;
  }
  85% {
    transform: translateY(0px);
    box-shadow: 0 0 1px #acacac;
    opacity: 1;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0;
  }
}

@-o-keyframes myfirst /* Opera */ {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  15% {
    transform: translateY(0px);
    box-shadow: 0 0 1px #acacac;
    opacity: 1;
  }
  85% {
    transform: translateY(0px);
    box-shadow: 0 0 1px #acacac;
    opacity: 1;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0;
  }
}
</style>
