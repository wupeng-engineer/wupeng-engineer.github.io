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
            <a class="close-btn">取消</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<script>
import "./login.less";
export default {
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
      let that = this;
      this.$http({
        method: "post",
        url: "/api/user/login",
        data: {
          loginname: this.loginName,
          password: this.password
        }
      })
        .then(function(res) {
          if (res.data.code == 200) {
            that.$router.push("/about");
          } else {
            console.log(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>