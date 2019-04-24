<template>
  <div class="wrap">
    <div class="login-wrap">
      <div class="login-header">
        <span class="header-written">{{message}}</span>
      </div>
      <div class="login-form">
        <div class="form-title">&nbsp;&nbsp;{{title}}</div>
        <form style="margin-top:44px">
          <p class="form-li use">
            <label class="lable-use">{{name}}</label>
            <input type="text" class="input-box" v-model="loginName">
          </p>
          <p class="form-li pass">
            <label class="lable-pass">{{pass}}</label>
            <input type="text" class="input-box" v-model="password">
          </p>
          <p class="check-box">
            <input type="checkbox">
            <span class="spanlit">{{save}}</span>
          </p>
          <div class="btn-box">
            <a class="login-btn" @click="login">登录</a>
            <a class="close-btn" @click="closeLogin">取消</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { uLogin } from "@/views/interface/res.js";
import "@/assets/login.less";
export default {
  name: "login",
  data() {
    return {
      message: "",
      title: "用户登录",
      name: "用户名：",
      pass: "密码：",
      save: "保存账号及密码",
      loginName: "",
      password: ""
    };
  },
  methods: {
    login() {
      let userInfo = {
        loginName: this.loginName,
        password: this.password
      };
      let that=this;
      this.$store.dispatch("SignIn",userInfo).then((res)=>{
        that.$toast.showMsgBox({message:res.message})
      });
    },
    closeLogin() {
      this.$store.commit("SET_LOGIN",false);
    }
  },
  props: {
    msg: String
  }
};
</script>
<style lang="less" scoped>
</style>