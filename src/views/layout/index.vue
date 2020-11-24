<template>
  <div class="layout">
    <Layout>
      <Sider
        ref="side"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
      >
        <div class="logo">logo</div>
        <menu-info :isCollapsed="isCollapsed"></menu-info>
      </Sider>
      <Layout>
        <Header :style="{ padding: 0 }" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{ margin: '0 20px' }"
            type="md-menu"
            size="24"
          ></Icon>
          <user-info></user-info>
        </Header>
        <tags-view></tags-view>
        <Content
          :style="{ margin: '20px', background: '#fff', minHeight: '260px' }"
        >
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import UserInfo from './components/userInfo'
import MenuInfo from './components/menuInfo'
import TagsView from './components/tagsView'
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  components: {
    UserInfo,
    MenuInfo,
    TagsView
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ];
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side.toggleCollapse();
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.logo {
  width: 100%;
  height: 64px;
}
/deep/ .ivu-layout {
  height: 100vh;
}
.menu-icon {
  transition: all 0.3s;
  float: left;
  line-height: inherit;
}
.rotate-icon {
  transform: rotate(-90deg);
}
/deep/ .ivu-layout-sider {
  @include sider-bg-color;
}
/deep/ .ivu-menu-dark {
  @include sider-bg-color;
}
/deep/ .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
  background-color: #101117;
}
/deep/
  .ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-opened
  .ivu-menu-submenu-title {
  @include sider-bg-color;
}
/deep/ .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  @include sider-style;
}
</style>