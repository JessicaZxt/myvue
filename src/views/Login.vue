<template>
  <div id="login">
    <div class="login-bg"></div>
    <div class="login-user">
      <img src="../assets/bg1.jpg" alt="背景" />
      <div class="info">
        <div>
          <h2>登 录</h2>
          <Form ref="loginForm" class="loginForm" :model="loginForm">
            <FormItem>
              <Input v-model="loginForm.user" placeholder="User ID">
                <Icon type="md-person" slot="prepend"></Icon
              ></Input>
            </FormItem>
            <FormItem>
              <Input
                type="password"
                v-model="loginForm.password"
                placeholder="Password"
              >
                <Icon type="md-lock" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem class="isCheck">
              <Checkbox v-model="loginForm.isCheck" size="small">
                记住用户名</Checkbox
              >
              <router-link to="/retrievePassword" class="retrievePassword"
                >忘记密码</router-link
              >
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                class="login-btn"
                @click="handleSubmit('loginForm')"
                >登录</Button
              >
            </FormItem>
          </Form>
          <router-link to="/register" class="register"
            >还没有账号？请注册</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        user: "",
        password: "",
        isCheck: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.$md5(this.loginForm.password), this.loginForm.password);
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  position: relative;
  .login-bg {
    background: url("../assets/bg1.jpg") no-repeat;
    background-size: cover;
    min-height: 100vh;
    filter: blur(1.3px);
    opacity: 0.9;
  }
  .login-user {
    position: absolute;
    width: 70%;
    height: 76%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
    }
    .info {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.4);
      //   opacity: 0.4;
      width: 35%;
      height: 100%;
      top: 0;
      right: 0;
      > div {
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        width: 100%;
      }
      h2 {
        color: #fff;
        font-size: 16px;
      }
      .loginForm {
        margin-top: 20px;
        padding: 0 15%;
        /deep/.ivu-form .ivu-form-item-label {
          width: 100%;
          text-align: left;
          padding-bottom: 7px;
          color: #bac1d9;
        }
        /deep/ .ivu-input {
          background-color: rgba(0, 0, 0, 0);
          border: 1px solid transparent;
          border-bottom: 1px solid #6b7583;
          color: #fff;
          &:focus {
            box-shadow: none;
          }
        }
        /deep/ .ivu-form-item {
          margin-bottom: 15px;
        }
        /deep/ .ivu-checkbox-inner {
          border: 1px solid #ddd;
          background-color: transparent;
        }
        /deep/ .ivu-input-group-prepend {
          border-right: 0;
          background: transparent;
          border: none;
          font-size: 18px;
          color: #fff;
          padding: 0;
        }
        /deep/ .ivu-checkbox-wrapper {
          padding-left: 2px;
          color: #DDD;
          float: left;
        }
        /deep/ .ivu-checkbox {
          margin-right: 4px;
        }
        .isCheck {
          text-align: left;
          color: #6b7583;
        }
        .retrievePassword {
          float: right;
          color: #999;
          text-decoration: underline;
          &:hover {
            color: #fff;
          }
        }
        .login-btn {
          width: 100%;
          background: #4e618e;
          border-color: #4e618e;
          margin-top: 15px;
          &:hover {
            background: #454e5f;
            border-color: #454e5f;
          }
        }
      }
      .register {
        width: 100%;
        color: #999;
        font-size: 13px;
        text-decoration: underline;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>