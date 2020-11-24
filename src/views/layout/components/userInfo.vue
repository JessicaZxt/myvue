<template>
  <div id="user-info">
    <Icon
      class="icon-scanner"
      @click="requestFullScreen"
      type="md-qr-scanner"
      v-show="!isFullscreen"
    />
    <Icon
      class="icon-scanner"
      type="md-contract"
      v-show="isFullscreen"
      @click="exitFullScreen"
    />
    <Dropdown class="user-icon">
      <Avatar style="background-color: #87d068" icon="ios-person" />
      <DropdownMenu slot="list">
        <DropdownItem
          ><Icon
            class="icon"
            type="ios-contact-outline"
          />个人信息</DropdownItem
        >
        <DropdownItem
          ><Icon class="icon" type="ios-log-out" />登出</DropdownItem
        >
      </DropdownMenu>
    </Dropdown>
    <span class="user-name">Admin</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFullscreen: false,
    }
  },
  methods: {
    requestFullScreen () {
      const element = document.getElementsByTagName("body")[0];
      const requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
      if (requestMethod) {
        requestMethod.call(element);
      } else if (typeof window.ActiveXObject !== "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
          wscript.SendKeys("{F11}");
        }
      }
      this.isFullscreen = true
    },
    exitFullScreen () {
      const el = document;
      const cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
        el.mozCancelFullScreen || el.exitFullScreen;
      if (typeof cfs != "undefined" && cfs) {
        cfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
      this.isFullscreen = false
    },
    checkFullScreen () {
      if ((document.body.scrollHeight - window.screen.height) === 0) {
        this.isFullscreen = true
      } else {
        this.isFullscreen = false
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.checkFullScreen)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkFullScreen)
  }
}
</script>

<style lang="scss" scoped>
#user-info {
  float: right;
  padding-right: 30px;
  .user-icon {
    cursor: pointer;
  }
  .user-name {
    margin-left: 5px;
  }
  .icon {
    font-size: 20px;
    vertical-align: middle;
    margin-right: 2px;
  }
  .ivu-dropdown-item {
    text-align: left;
  }
  .icon-scanner {
    margin-right: 10px;
    font-size: 20px;
    vertical-align: middle;
    cursor: pointer;
  }
}
</style>