import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
  state: {
    isAppShow: true,
    user: null,
    toPage: '',
  },
  mutations: {
    setIsAppShow(state, data) {
      state.isAppShow = data
    },
    setUser(state, data) {
      state.user = data
    },
    setToPage(state, data) {
      state.toPage = data
    },
  },
  actions: {},
  modules: {},
})
