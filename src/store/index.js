import Vue from 'vue'
import Vuex from 'vuex'

import azureadmin from './modules/azureadmin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    azureadmin
  }
})
