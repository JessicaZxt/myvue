<template>
  <div id="menu-info">
    <Menu theme="dark" width="auto" :active-name="activeName">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-paper" />
          内容管理
        </template>
        <div @click="addTagsFn(item)" v-for="item in menus" :key="item.path">
          <MenuItem :name="item.path" :to="item.path"
            >{{ item.name }}
          </MenuItem>
        </div>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: '/home-page',
      menus: [{
        path: '/home-page',
        name: '首页',
        color: 'default'
      }, {
        path: '/test',
        name: '测试页',
        color: 'default'
      }]
    }
  },
  watch: {
    $route (val) {
      this.activeName = val.path
    }
  },
  methods: {
    addTagsFn (item) {
      this.$store.dispatch('login/addTagsView', item)
    }
  }
}
</script>

<style lang="scss" scoped>
#menu-info {
  .menu-name {
    width: 100%;
    height: 100%;
  }
  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  .menu-item i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span {
    width: 0px;
    transition: width 0.2s ease;
  }
  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }
}
</style>