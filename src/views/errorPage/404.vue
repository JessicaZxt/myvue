<template>
  <div id="error-404">
    <img class="bg" src="../../assets/404.jpg"></img>
    <Button type="primary" shape="circle" icon="md-home" @click="goBackHomePage">返回首页</Button>
  </div>
</template>

<script>
export default {
  methods: {
    goBackHomePage () {
      this.$router.push({ path: '/home-page' })
    }
  }
}
</script>