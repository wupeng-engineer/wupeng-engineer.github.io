<template>
  <div class="mains">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "main-box",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style lang="less" scoped>
.mains {
  position: absolute;
  top: 50px;
  width: 100%;
  height: calc(100% - 100px);
  left: 0;
  bottom: 50px;
  overflow: auto;
  box-sizing: border-box;
  border: 1px solid @border-color;
  overflow: hidden;
}
</style>
