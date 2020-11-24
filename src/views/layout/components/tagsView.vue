<template>
  <div id="tagsView">
    <Button
      class="drop-icon"
      icon="ios-arrow-dropleft"
      @click="dropLeft"
    ></Button>
    <div class="content" ref="content">
      <div class="tags" ref="tags">
        <Dropdown
          trigger="contextMenu"
          v-for="item in tagsArr"
          :key="item.path"
        >
          <router-link :to="item.path">
            <Tag
              type="dot"
              closable
              :color="item.path === currentRoutePath ? 'primary' : 'default'"
              @on-close="closeCurrentTag(item)"
              @click.native="changeTag(item)"
              >{{ item.name }}</Tag
            >
          </router-link>
          <DropdownMenu slot="list">
            <DropdownItem>关闭当前</DropdownItem>
            <DropdownItem>关闭所有</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
    <Button
      class="drop-icon"
      icon="ios-arrow-dropright"
      @click="dropRight"
    ></Button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['tagsArr'])
  },
  data () {
    return {
      currentRoutePath: ''
    }
  },
  watch: {
    $route: {
      handler (val) {
        this.currentRoutePath = val.path
      },
      immediate: true
    }
  },
  methods: {
    changeTag (item) {
      this.$store.dispatch('login/changeTagsColor', item)
    },
    closeCurrentTag (item) {
      this.$store.dispatch('login/removeTagsView', item)
    },
    dropLeft () {
      if (this.$refs.tags.offsetLeft < 0) {
        const num = 50 + this.$refs.tags.offsetLeft
        this.$refs.tags.style.left = num < 0 ? num + 'px' : '0px'
      }
    },
    dropRight () {
      const num = Math.abs(this.$refs.tags.offsetLeft)
      const end = this.$refs.tags.offsetWidth - this.$refs.content.offsetWidth
      if (num < end) {
        const setpLeft = Math.abs(-50 + this.$refs.tags.offsetLeft)
        this.$refs.tags.style.left = setpLeft > end ? -end + 'px' : -setpLeft + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#tagsView {
  position: relative;
  background-color: #eee;
  width: 100%;
  height: 35px;
  line-height: 35px;
  display: flex;
  justify-content: space-between;
  .drop-icon {
    padding: 0 5px;
    line-height: 35px !important;
    width: 28px;
    height: 100%;
    z-index: 1;
  }
  .content {
    flex: 1;
    overflow: hidden;
  }
  .tags {
    z-index: 0;
    position: absolute;
    left: 0;
    width: max-content;
    padding-left: 28px;
    transition: all linear 0.2s;
  }
}
</style>