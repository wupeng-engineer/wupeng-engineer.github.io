<style src="./message.less" lang="less" scoped></style>
<template>
  <div class="message-box" v-show="isShowMessageBox">
    <div class="mask" @click="cancel"></div>
    <div class="message-content">
      <svg class="icon" aria-hidden="true" @click="cancel">
        <use xlink:href="#icon-delete"></use>
      </svg>
      <h3 class="title">{{ title }}</h3>
      <p class="content">{{ content }}</p>
      <div>
        <input type="text" v-model="inputValue" v-if="isShowInput" ref="input">
      </div>
      <div class="btn-group">
        <button class="btn-default" @click="cancel" v-show="isShowCancelBtn">{{ cancelBtnText }}</button>
        <button
          class="btn-primary btn-confirm"
          @click="confirm"
          v-show="isShowConfimrBtn"
        >{{ confirmBtnText }}</button>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  props: {
    title: {
      type: String,
      default: "标题"
    },
    content: {
      type: String,
      default: "这是弹框内容"
    },
    isShowInput: false,
    inputValue: "",
    isShowCancelBtn: {
      type: Boolean,
      default: true
    },
    isShowConfimrBtn: {
      type: Boolean,
      default: true
    },
    cancelBtnText: {
      type: String,
      default: "取消"
    },
    confirmBtnText: {
      type: String,
      default: "确定"
    }
  },
  data() {
    return {
      isShowMessageBox: false,
      resolve: "",
      reject: "",
      promise: ""
    };
  },
  methods: {
    confirm: function() {
      this.isShowMessageBox = false;
      if (this.isShowInput) {
        this.resolve(this.inputValue);
      } else {
        this.resolve("confirm");
      }
      this.remove();
    },
    cancel: function() {
      this.isShowMessageBox = false;
      this.reject("cancel");
      this.remove();
    },
    showMsgBox: function() {
      this.isShowMessageBox = true;
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      return this.promise;
    },
    remove: function() {
      setTimeout(() => {
        this.destroy(true);
      }, 300);
    },
    destroy: function() {
      this.$destroy(true);
      document.body.removeChild(this.$el);
    }
  }
}
</script>

    