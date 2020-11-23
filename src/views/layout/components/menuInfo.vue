<template>
  <div id="menu-info">
    <Menu
      theme="dark"
      width="auto"
      :active-name="activeName"
      :class="menuitemClasses"
    >
      <Submenu name="1" v-show="!isCollapsed">
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
      <Dropdown placement="right-start" v-show="isCollapsed">
        <MenuItem name="1-1" class="isCollapsed">
          <Icon type="ios-navigate"></Icon>
          <span>Option 1</span>
        </MenuItem>
        <DropdownMenu slot="list">
          <div @click="addTagsFn(item)" v-for="item in menus" :key="item.path">
            <DropdownItem>
              <router-link class="color" :to="item.path"
                >{{ item.name }}
              </router-link>
            </DropdownItem>
          </div>
        </DropdownMenu>
      </Dropdown>
    </Menu>
  </div>
</template>

<script>
export default {
  props: {
    isCollapsed: {
      type: Boolean,
      default: true
    }
  },
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
  computed: {
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
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
  .menu-icon {
    transition: all 0.3s;
  }
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
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover {
    background: $sideBarBg;
  }
  .isCollapsed.ivu-menu-item {
    padding: 0;
    width: 78px;
    height: 30px;
    line-height: 30px;
  }
  /deep/ .ivu-select-dropdown {
    background-color: $sideBarBg;
  }
  .ivu-dropdown-item {
    color: hsla(0, 0%, 100%, 0.7);
  }
  .ivu-dropdown-item:hover {
    background: transparent;
    color: #fff;
  }
  .ivu-menu-dark.ivu-menu-vertical
    .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: hsla(0, 0%, 100%, 0.7);
    background: $sideBarBg;
  }
}
</style>