<template>
  <div id="register">
    <h2>注 册</h2>
    <Form
      ref="registerForm"
      class="registerForm"
      label-position="left"
      :label-width="70"
      :model="registerForm"
      :rules="rules"
    >
      <FormItem label="用户名" prop="userNmae">
        <Input v-model="registerForm.userNmae" placeholder="User ID"> ></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input
          v-model="registerForm.password"
          type="password"
          password
          placeholder="Password"
        />
      </FormItem>
      <FormItem label="确认密码" prop="confirmPassword">
        <Input
          v-model="registerForm.confirmPassword"
          type="password"
          password
          placeholder="Password"
        />
      </FormItem>
      <FormItem label="手机号码" prop="phone">
        <Input v-model="registerForm.phone" placeholder="Phone"> ></Input>
      </FormItem>
      <FormItem label="性别" prop="sex">
        <RadioGroup v-model="registerForm.sex">
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="邮箱" prop="email">
        <Input
          v-model="registerForm.email"
          class="emailTxt"
          placeholder="Email"
        />
      </FormItem>
      <FormItem class="btn-label">
        <Button
          type="primary"
          class="register-btn"
          @click="handleRegister('registerForm')"
          >注册</Button
        >
      </FormItem>
    </Form>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.password !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入确认密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    const validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!/^1\d{10}$/.test(value)) {
        callback(new Error("手机号码有误，请重填"));
      } else {
        callback();
      }
    };
    const validateEmail = (rule, value, callback) => {
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!reg.test(value)) {
        callback(new Error("邮箱格式不正确"));
      } else {
        callback();
      }
    };
    const validateUserNmae = (rule, value, callback) => {
      var reg = /^[a-zA-Z0-9_-]{4,16}$/;
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!reg.test(value)) {
        callback(new Error("只能使用字母，数字以及下划线组合"));
      } else {
        callback();
      }
    };
    const validateSex = (rule, value, callback) => {
      var reg = /^[a-zA-Z0-9_-]{4,16}$/;
      if (value === "") {
        callback(new Error("请选择性别"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userNmae: "",
        password: "",
        confirmPassword: "",
        phone: "",
        sex: "",
        email: "",
      },
      rules: {
        userNmae: [{ validator: validateUserNmae, trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        confirmPassword: [{ validator: validatePassCheck, trigger: "blur" }],
        sex: [{ validator: validateSex, trigger: "change" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleRegister(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#register {
  font-size: 16px;
  h2 {
    color: #fff;
    font-size: 16px;
  }
  transform: rotateY(180deg);
  .registerForm {
    margin-top: 20px;
    padding: 0 10%;
    /deep/.ivu-form .ivu-form-item-label {
      color: #fff;
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
    /deep/ .ivu-form-item {
      margin-bottom: 15px;
    }
    /deep/ .ivu-radio-group {
      width: 100%;
      text-align: left;
      color: #ddd;
    }
    /deep/ .emailTxt {
      .ivu-input-group-append {
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        color: #ddd;
      }
    }
    /deep/ .btn-label {
      .ivu-form-item-content {
        margin-left: 0 !important;
      }
    }
    /deep/ .ivu-form-item-error-tip {
      color: #d42727;
      font-size: 13px;
    }
    /deep/ .ivu-radio-inner {
      background-color: transparent;
      transform: scale(0.8);
    }
    .register-btn {
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