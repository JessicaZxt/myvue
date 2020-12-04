const directive = {
  'focus': {
    inserted: (el) => {
      console.dir(el);
      el.focus()
    }
  },
  'auth': {
    inserted: (el, binding, vnode) => {
      const { value } = binding
      const roles = [1, 2, 3]
      if (value && value instanceof Array && value.length > 0) {
        const haspermission = roles.some(role => {
          return value.includes(role)
        })
        if (!haspermission) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      } else {
        throw new Error(`need role Like v-auth=['1','2']`)
      }
    }
  }
}

export default directive