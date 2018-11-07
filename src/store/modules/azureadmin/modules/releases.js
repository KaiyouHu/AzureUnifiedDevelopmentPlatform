import util from '@/libs/util.js'
import setting from '@/setting.js'

export default {
  namespaced: true,
  state: {
    // azureAdmin 版本
    version: setting.releases.version
  },
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state vuex state
     */
    versionShow (state) {
      util.log.capsule('azureAdmin', `v${state.version}`)
      console.log('Github https://github.com/kaiyouhu/azure-admin')
      console.log('Doc    https://doc.azureadmin.fairyever.com/zh/')
    }
  }
}
