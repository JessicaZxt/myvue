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
            <router-link class="a-color" :to="item.path">
              <DropdownItem>
                {{ item.name }}
              </DropdownItem>
            </router-link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </Menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    isCollapsed: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      activeName: '/home-page'
      // menus: [{
      //   path: '/home-page',
      //   name: '首页'
      // }, {
      //   path: '/test',
      //   name: '测试页'
      // }]
    }
  },
  watch: {
    $route (val) {
      this.activeName = val.path
    }
  },
  computed: {
    ...mapGetters(['menus']),
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
@mixin collapsed-menu-transition($transformPx, $fontSizePx) {
  transform: translateX($transformPx);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: $fontSizePx;
}
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
    @include collapsed-menu-transition(0px, 16px);
  }
  .collapsed-menu span {
    width: 0px;
    transition: width 0.2s ease;
  }
  .collapsed-menu i {
    @include collapsed-menu-transition(5px, 22px);
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
  /deep/
    .ivu-menu-dark.ivu-menu-vertical
    .ivu-menu-child-item-active
    > .ivu-menu-submenu-title {
    color: hsla(0, 0%, 100%, 0.7);
    &:hover {
      color: #fff;
    }
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
  .a-color {
    color: hsla(0, 0%, 100%, 0.7);
    &:hover {
      color: #fff;
    }
  }
}
</style>