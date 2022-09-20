import Vue from 'vue'
import Vuex from 'vuex'

import permission from '@wm/wm-dashboard-components/packages/permission'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routeFilterForm: {
      data: {},
      rules: {},
      loading: false
    }
  },
  mutations: {
    SET_STATE(state, { key, value }) {
      _.set(state, key, value)
    }
  },
  actions: {},
  modules: {
    permission
  }
})
