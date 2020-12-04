<template>
  <div>
    <baidu-map class="bm-view" :center="center" scroll-wheel-zoom :zoom="zoom">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list
    ></baidu-map>
    <Input v-model="value" v-auth="[12]" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: '北京',
      zoom: 15,
      value: 111
    }
  },
  methods: {
    //
  }
}
</script>

<style lang="scss" scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>