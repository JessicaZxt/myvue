<template>
  <div id="login">
    <div class="login-bg"></div>
    <div class="login-user">
      <img src="../../assets/bg1.jpg" alt="背景" />
      <div :class="formClass">
        <div v-show="!showRegisterPage">
          <login>
            <a class="a-link" @click="showRegisterPageFn">还没有账号？请注册</a>
          </login>
        </div>
        <div v-show="showRegisterPage">
          <register>
            <a
              class="a-link"
              style="transform: rotateY(180deg)"
              @click="showRegisterPageFn"
              >已注册？请登录</a
            >
          </register>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "./Register.vue";
import Login from "./Login";
export default {
  name: "index",
  data() {
    return {
      loginForm: {
        user: "",
        password: "",
        isCheck: false,
      },
      formClass: "info",
      showRegisterPage: false,
    };
  },
  components: {
    Login,
    Register,
  },
  methods: {
    showRegisterPageFn() {
      if (!this.showRegisterPage) {
        this.formClass = "info flipPage";
      } else {
        this.formClass = "info resetFlip";
      }
      setTimeout(() => {
        this.showRegisterPage = !this.showRegisterPage;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  position: relative;
  .login-bg {
    background: url("../../assets/bg1.jpg") no-repeat;
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
      .a-link {
        width: 100%;
        color: #999;
        font-size: 13px;
        text-decoration: underline;
        &:hover {
          color: #fff;
        }
      }
    }
    .flipPage {
      transform: rotateY(180deg);
      transition: 1s linear;
    }
    .resetFlip {
      transform: rotateY(0deg);
      transition: 1s linear;
    }
  }
}
</style>