<template>
  <div id="loginContent">
    <h2>登 录</h2>
    <Form ref="loginForm" class="loginForm" :model="loginForm">
      <FormItem>
        <Input
          v-model="loginForm.user"
          prefix="md-person"
          placeholder="User ID"
        />
      </FormItem>
      <FormItem>
        <Input
          prefix="md-lock"
          v-model="loginForm.password"
          type="password"
          password
          placeholder="Password"
        />
      </FormItem>
      <FormItem class="isCheck">
        <Checkbox v-model="loginForm.isCheck" size="small">记住用户名</Checkbox>
        <router-link to="/retrievePassword" class="retrievePassword"
          >忘记密码</router-link
        >
      </FormItem>
      <FormItem>
        <Button type="primary" class="login-btn" @click="handleSubmit()"
          >登录</Button
        >
      </FormItem>
    </Form>
    <slot></slot>
  </div>
</template>

<script>
import { loginSubmit } from "@/api/login/index"
import { setToken } from '@/untils/auth'
export default {
  name: "Login",
  data () {
    return {
      loginForm: {
        user: "",
        password: "",
        isCheck: false
      }
    }
  },
  methods: {
    handleSubmit () {
      setToken(111)
      this.$router.push({ path: '/' })
      // console.log(this.$md5(this.loginForm.password), this.loginForm.password);
      // const obj = {
      //   userID: this.loginForm.user,
      //   password: this.loginForm.password
      // }
      // loginSubmit(obj).then(res => {
      //   this.$Message.success(res)
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
#loginContent {
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
      height: auto;
      border-radius: 0;

      &:focus {
        box-shadow: none;
      }
    }

    /deep/ .ivu-input-with-prefix {
      padding-left: 4px;
      margin-left: 19px;
      width: 90%;
    }

    /deep/ .ivu-input-prefix {
      left: -7px;

      i {
        color: #fff;
        font-size: 18px;
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
      color: #ddd;
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
}
</style>