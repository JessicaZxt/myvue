function findIdx (arr, list) {
  return arr.findIndex(item => item.path === list.path)
}

const login = {
  namespaced: true,
  state: {
    tagsArr: [{
      path: '/home-page',
      name: '首页',
      color: 'primary'
    }]
  },
  mutations: {
    ADD_TAGS: (state, list) => {
      const isExist = findIdx(state.tagsArr, list)
      if (isExist === -1) {
        state.tagsArr.push(list)
      }
    },
    CHANGE_TAGS_COLOR: (state, list) => {
      state.tagsArr.forEach(item => {
        if (item.path === list.path) {
          item.color = 'primary'
        } else {
          item.color = 'default'
        }
      })
    },
    REMOVE_TAGS: (state, list) => {
      const currentIdx = findIdx(state.tagsArr, list)
      state.tagsArr.splice(currentIdx, 1)
      state.tagsArr.forEach(item => {
        item.color = 'default'
      })
      state.tagsArr[0].color = 'primary'
    }
  },
  actions: {
    addTagsView ({ commit }, list) {
      commit('ADD_TAGS', list)
      commit('CHANGE_TAGS_COLOR', list)
    },
    removeTagsView ({ commit }, list) {
      commit('REMOVE_TAGS', list)
    },
    changeTagsColor ({ commit }, list) {
      commit('CHANGE_TAGS_COLOR', list)
    }
  }
}

export default login